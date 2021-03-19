'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    //categories 
    Route.resource('categories', 'CategoryController').apiOnly()

    //products
    Route.resource('products', 'ProductController').apiOnly()

    //Coupon
    Route.resource('coupons', 'Coupon').apiOnly()

    //Order
    Route.resource('orders', 'OrderController').apiOnly()

    //Image
    Route.resource('images', 'ImageController').apiOnly()

    //User
    Route.resource('users', 'UserController').apiOnly()

}).prefix('v1/admin').namespace('Admin')