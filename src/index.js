import $ from "jquery"
import {SomeModule} from "./someModule.js";
import "./assets/css/styles.css";
import "./assets/scss/styles.scss";


console.log('Hello world!', $)
const mod = new SomeModule();
mod.test();

$("div").html("hello hello")