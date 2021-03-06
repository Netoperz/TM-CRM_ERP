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



exports.name = 'parameters';
exports.version = '1.00';
exports.enabled = true;
exports.description = 'Gestion des paramètres';
exports.rights = {
    "user": [{
            "desc": "Consulter les autres utilisateurs",
            "perm": {
                "read": true
            }
        },
        {
            "desc": "Consulter les permissions des autres utilisateurs",
            "perm": {
                "readperms": false
            }
        },
        {
            "desc": "Creer/modifier utilisateurs internes et externes",
            "perm": {
                "write": false
            }
        },
        {
            "desc": "Creer/modifier utilisateurs externes seulement",
            "perm": {
                "writeExterne": false
            }
        },
        {
            "desc": "Modifier le mot de passe des autres utilisateurs",
            "perm": {
                "password": false
            }
        },
        {
            "desc": "Supprimer ou desactiver les autres utilisateurs",
            "perm": {
                "delete": false
            }
        },
        {
            "desc": "Consulter ses propres permissions",
            "perm": {
                "self_readperms": false
            }
        },
        {
            "desc": "Creer/modifier ses propres infos utilisateur",
            "perm": {
                "self_update": false
            }
        },
        {
            "desc": "Modifier son propre mot de passe",
            "perm": {
                "self_password": false
            }
        },
        {
            "desc": "Exporter les utilisateurs",
            "perm": {
                "export": false
            }
        },
        {
            "desc": "Voir/modifier les conges/absences des utilisateurs",
            "perm": {
                "holidayAll": false
            }
        }
    ],
    "group": [{
            "desc": "Consulter les groupes",
            "perm": {
                "read": false
            }
        },
        {
            "desc": "Consulter les permissions des groupes",
            "perm": {
                "readperms": false
            }
        },
        {
            "desc": "Creer/modifier les groupes et leurs permissions",
            "perm": {
                "write": false
            }
        },
        {
            "desc": "Supprimer ou desactiver les groupes",
            "perm": {
                "delete": false
            }
        }
    ],
    "absence": [{
            "desc": "Consulter les absences",
            "perm": {
                "read": false
            }
        },
        {
            "desc": "Creer/modifier les absences",
            "perm": {
                "write": false
            }
        },
        {
            "desc": "Supprimer les absences",
            "perm": {
                "delete": false
            }
        }
    ],
    "entity": [{
            "desc": "Lister les entités",
            "perm": {
                "read": true
            }
        },
        {
            "desc": "Creer/modifier les entités",
            "perm": {
                "create": false
            }
        },
        {
            "desc": "Supprimer les entités",
            "perm": {
                "delete": false
            }
        }
    ],
    "settings": [{
            "desc": "Lire les configurations",
            "perm": {
                "read": false
            }
        },
        {
            "desc": "Creer/modifier les configurations",
            "perm": {
                "write": false
            }
        },
        {
            "desc": "Supprimer les configurations",
            "perm": {
                "delete": false
            }
        }
    ],
    "box": [{
            "desc": "Connexion des utilisateurs",
            "perm": {
                "infologin": false
            }
        },
        {
            "desc": "Liste de absences",
            "perm": {
                "absence": false
            }
        },
        {
            "desc": "indicateur du mois",
            "perm": {
                "indicateur": false
            }
        }
    ]
};
exports.menus = {
    "menu:parameters": {
        "position": 1000,
        "url": "",
        "enabled": "settings.read",
        "usertype": 2,
        "title": "Parameters",
        "icon": "fa-cogs",
        "submenus": {
            "menu:absences": {
                "position": 1,
                "url": "/erp/#!/europexpress/absence.html",
                "perms": "user.holidayAll",
                "usertype": 2,
                "icon": "fa-group",
                "title": "users:LeaveManagement"
            },
            "settings.entity": {
                "position": 20,
                "url": "/erp/#!/settings/entity",
                "perms": [
                    ["superadmin"],
                    ["admin", "entity.read"]
                ],
                "enabled": "$conf->entity->enabled",
                "usertype": 2,
                "title": "companies:ManagementEntity",
                "icon": "fa-globe"
            },
            "menu:groups": {
                "position": 30,
                "url": "/erp/#!/group",
                "perms": "group.read",
                "usertype": 2,
                "icon": "fa-group",
                "title": "users:GroupManagement"
            },
            "settings.product": {
                "position": 50,
                "url": "/erp/#!/settings/product",
                "perms": "settings.read",
                "usertype": 2,
                "title": "products:ProductManagement",
                "icon": "fa-globe"
            },

            "menu:team": {
                "position": 60,
                "url": "/erp/#!/user",
                "perms": "user.read",
                "usertype": 2,
                "icon": "fa-group",
                "title": "users:Collaborators"
            },
            "menu:modules": {
                "position": 70,
                "enabled": "$user->admin",
                "url": "",
                "perms": "admin",
                "icon": "fa-cog",
                "usertype": 2,
                "title": "admin:Modules"
            },
            "menu:systemtools": {
                "position": 80,
                "usertype": 2,
                "enabled": "$user->admin",
                "title": "admin:SystemTools",
                "perms": "admin",
                "icon": "fa-briefcase",
                "submenus": {
                    "menu:audit": {
                        "position": 1,
                        "perms": "admin",
                        "url": "",
                        "usertype": 2,
                        "title": "admin:Audit"
                    },
                    "menu:sessions": {
                        "position": 5,
                        "perms": "admin",
                        "url": "",
                        "usertype": 2,
                        "title": "admin:Sessions"
                    }
                }
            }
        }
    }
};