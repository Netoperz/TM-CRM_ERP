/**
Copyright 2017 ToManage

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@author    ToManage SAS <contact@tomanage.fr>
@copyright 2014-2017 ToManage SAS
@license   http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
International Registered Trademark & Property of ToManage SAS
*/



exports.name = "payment";
exports.version = "1.00";
exports.description = "Gestion des paiements";
exports.rights = [{
        "desc": "Lire les paiements",
        "perm": {
            "read": true
        }
    },
    {
        "desc": "Créer ou modifier les paiements",
        "perm": {
            "create": true
        }
    },
    {
        "desc": "Valider les paiments",
        "perm": {
            "validate": false
        }
    },
    {
        "desc": "Annueler les paiements",
        "perm": {
            "delete": false
        }
    },
    {
        "desc": "Annuler une ligne de paiement",
        "perm": {
            "cancel": false
        }
    },
    {
        "desc": "Rejeter un paiement",
        "perm": {
            "reject": false
        }
    }
];
exports.menus = {
    "menu:accounting": {
        "position": 80,
        "perms": "bill.read",
        "enabled": "$conf->facture->enabled",
        "usertype": 2,
        "icon": "fa-money",
        "title": "compta:MenuFinancial",
        "submenus": {

        }
    }
};