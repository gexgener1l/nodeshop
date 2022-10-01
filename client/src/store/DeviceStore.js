import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types = [
            // {id:1, name: "Смартфоны"},
            // {id:2, name: "Ноутбуки"}
        ]
        this._brands = [
            {id:1, name: "Samsung"},
            {id:2, name: "Apple"},
            {id:3, name: "Lenovo"},
        ]
        this._devices = [
            {id:1,name:"iphone 5",price:300,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:2,name:"iphone 6",price:400,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:3,name:"iphone 7",price:500,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:4,name:"iphone 8",price:600,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:5,name:"iphone 10",price:1000,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:6,name:"iphone 11",price:1300,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
            {id:7,name:"iphone 12",price:2000,rating:0,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT61iTYSkU63a-sLPoUvczD-S5OhGkvhzA&usqp=CAU"},
        ]
        this._SelectedTypes = {}
        this._SelectedBrands = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._SelectedTypes = type
    }
    setSelectedBrand(brands){
        this._SelectedBrands = brands
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._SelectedTypes
    }
    get selectedBrand(){
        return this._SelectedBrands
    }

}
