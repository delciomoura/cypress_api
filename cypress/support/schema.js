export const contactSchema = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "_id",
        "name",
        "number",
        "description",
        "userId",
        "__v"
    ],
    "properties": {
        "_id": {
            "title": "The _id Schema",
            "type": "string",
            "default": "",
            "examples": [
                "62a50e9347f3638e65b0a18e"
            ]
        },
        "name": {
            "title": "The name Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Delcio 2"
            ]
        },
        "number": {
            "title": "The number Schema",
            "type": "string",
            "default": "",
            "examples": [
                "84111111111"
            ]
        },
        "description": {
            "title": "The description Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Orçamento manutenção de computadores"
            ]
        },
        "userId": {
            "title": "The userId Schema",
            "type": "string",
            "default": "",
            "examples": [
                "62a507b747f3638e65b0a18c"
            ]
        },
        "__v": {
            "title": "The __v Schema",
            "type": "number",
            "default": 0,
            "examples": [
                0
            ]
        }
    },
    "examples": [{
        "_id": "62a50e9347f3638e65b0a18e",
        "name": "Delcio 2",
        "number": "84111111111",
        "description": "Orçamento manutenção de computadores",
        "userId": "62a507b747f3638e65b0a18c",
        "__v": 0
    }]
};

export const userSchema = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "_id",
        "email",
        "password",
        "__v"
    ],
    "properties": {
        "_id": {
            "title": "The _id Schema",
            "type": "string",
            "default": "",
            "examples": [
                "62a5014047f3638e65b0a186"
            ]
        },
        "email": {
            "title": "The email Schema",
            "type": "string",
            "default": "",
            "examples": [
                "delcio_ua48@email.com"
            ]
        },
        "password": {
            "title": "The password Schema",
            "type": "string",
            "default": "",
            "examples": [
                "2e2d21f4713a9134359c1e1ff23d34fa"
            ]
        },
        "__v": {
            "title": "The __v Schema",
            "type": "number",
            "default": 0,
            "examples": [
                0
            ]
        }
    },
    "examples": [{
        "_id": "62a5014047f3638e65b0a186",
        "email": "delcio_ua48@email.com",
        "password": "2e2d21f4713a9134359c1e1ff23d34fa",
        "__v": 0
    }]
};

export const loginSchema = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "user_token"
    ],
    "properties": {
        "user_token": {
            "title": "The user_token Schema",
            "type": "string",
            "default": "",
            "examples": [
                "62a507b747f3638e65b0a18c"
            ]
        }
    },
    "examples": [{
        "user_token": "62a507b747f3638e65b0a18c"
    }]
};

export const duplicatedUserSchema = {
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "error"
    ],
    "properties": {
        "error": {
            "title": "The error Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Duplicated user"
            ]
        }
    },
    "examples": [{
        "error": "Duplicated user"
    }]
};

export const contactListSchema = {
    "type": "array",
    "default": [],
    "title": "Root Schema",
    "items": {
        "type": "object",
        "default": {},
        "title": "A Schema",
        "required": [
            "_id",
            "name",
            "number",
            "description",
            "userId",
            "__v"
        ],
        "properties": {
            "_id": {
                "type": "string",
                "default": "",
                "title": "The _id Schema",
                "examples": [
                    "6461598a670aa5347490a5f4"
                ]
            },
            "name": {
                "type": "string",
                "default": "",
                "title": "The name Schema",
                "examples": [
                    "Delcio_ocaq"
                ]
            },
            "number": {
                "type": "string",
                "default": "",
                "title": "The number Schema",
                "examples": [
                    "22999999999"
                ]
            },
            "description": {
                "type": "string",
                "default": "",
                "title": "The description Schema",
                "examples": [
                    "Teste delete"
                ]
            },
            "userId": {
                "type": "string",
                "default": "",
                "title": "The userId Schema",
                "examples": [
                    "6461598a670aa5347490a5ef"
                ]
            },
            "__v": {
                "type": "integer",
                "default": 0,
                "title": "The __v Schema",
                "examples": [
                    0
                ]
            }
        },
        "examples": [{
            "_id": "6461598a670aa5347490a5f4",
            "name": "Delcio_ocaq",
            "number": "22999999999",
            "description": "Teste delete",
            "userId": "6461598a670aa5347490a5ef",
            "__v": 0
        }]
    },
    "examples": [
        [{
            "_id": "6461598a670aa5347490a5f4",
            "name": "Delcio_ocaq",
            "number": "22999999999",
            "description": "Teste delete",
            "userId": "6461598a670aa5347490a5ef",
            "__v": 0
        }]
    ]
};