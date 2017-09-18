(ns dat.sys.import
  (:require [taoensso.timbre :as log :include-macros true]
            [dat.spec.protocols :as protocols]
            [dat.sync.core :as dat.sync]
            [dat.sync.db :as d]
            [datomic.api :as dapi]
            [clojure.java.io :as io]
            [com.stuartsierra.component :as component]))

(defrecord Importer [config knowbase]
  component/Lifecycle
  (start [component]
    (log/info "Importing data")
    (let [reset-db? true;;(get-in config [:dat.sys/db :reset-db?])
          conn (:conn knowbase)
          data (-> "resources/test-data.edn" slurp read-string)]
      ;; FIXME: make idempotent
      (when reset-db?
        (d/transact! conn data dat.sync/ident-tx-meta)

        (when (instance? datomic.Connection conn)
          (log/info "  providing uuidents")
          ;; ???: this transaction could potentially suffer from race conditions with the client. make it a db/fn to alleviate?
          (let [uuidents (dat.sync/uuident-all-the-things* (d/snap conn) (protocols/snapshot knowbase))]
            (d/transact! conn uuidents))))))
  (stop [component]
        component))

(defn new-importer
  ([] (new-importer {}))
  ([opts]
   (map->Importer opts)))
