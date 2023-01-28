import React from "react";
import axios from "axios"

export default axios.create({
    baseURL:"http://shuttle.centralindia.cloudapp.azure.com"
})

