(ns {{ns-name}}.ring-handler
  (:require [taoensso.timbre :as log :include-macros true]
            [com.stuartsierra.component :as component]
            [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.resource :refer (wrap-resource)]
            [dat.spec.protocols :as protocols]))


(defn fallbacks [handlers]
  (apply routes
         (map
           #(GET "*" _ %)
           handlers)))

(defn main-handler [chsk-handlers fallback-handlers]
  (routes
   (GET  "/"     _   (clojure.java.io/resource "index.html"))
   (GET  (protocols/sock-route chsk-handlers) req ((protocols/sock-get chsk-handlers) req))
   (POST (protocols/sock-route chsk-handlers) req ((protocols/sock-post chsk-handlers) req))
   (GET "*" _ (fallbacks fallback-handlers)) ;; FIXME: should be some sort of ANY
   (route/not-found "<h1>Page not found</h1>")))

(defn app [handler]
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in
             [:security :anti-forgery]
             {:read-token (fn [req] (-> req :params :csrf-token))})
            (assoc-in [:static :resources] "public"))]
    (-> handler
        (wrap-defaults ring-defaults-config)
        (wrap-resource "/META-INF/resources"))))


(defrecord RingHandler [config ws-connection routes handler]
  component/Lifecycle
  (start [component]
      component
      (let [component (component/stop component)
            handler (app (main-handler ws-connection (:handlers routes)))]
        (assoc component :handler handler)))
  (stop [component]
    (assoc component :handler nil)))

(defn new-ring-handler []
  (map->RingHandler {}))
