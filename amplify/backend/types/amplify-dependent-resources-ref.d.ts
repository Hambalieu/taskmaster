export type AmplifyDependentResourcesAttributes = {
    "api": {
        "taskmaster": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "taskmaster695d3b60": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "taskmasterstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "taskmaster": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    },
    "predictions": {
        "taskmasterSpeechGenerator": {
            "region": "string",
            "language": "string",
            "voice": "string"
        },
        "TaskmasterTranlatetext": {
            "region": "string",
            "sourceLang": "string",
            "targetLang": "string"
        }
    }
}