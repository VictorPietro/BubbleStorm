<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
?>
{
    "obj": [
        {
            "name": "Iago",
            "online": true
        },
        {
            "name": "ABC",
            "online": false
        },
        {
            "name": "XYZ",
            "online": true
        },
        {
            "name": "ABC",
            "   online": false
        }
    ]
}