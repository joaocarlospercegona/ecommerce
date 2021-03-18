'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    image(){
        return this.belongsTo('App/Models/Image')
    }

    //relacionamento entre produto e imagens (galeria de imagens do produto)

    images(){
        return this.belongsToMany('App/Models/Image')
    }

    //relacionamento entre protudos e categorias

    catagories(){
        return this.belongsToMany('App/Models/Category')
    }

    //relacionamento entre produto e cupon
    
    coupons(){
        return this.belongsToMany('App/Models/Coupon')
    }
}

module.exports = Product
