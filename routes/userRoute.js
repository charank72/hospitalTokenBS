const userController=require('../controller/userController')
const {readall}=require('../controller/doctorController')
const route=require('express').Router()

route.post(`/details`,userController.form)
route.get(`/all`,readall)

module.exports=route