"use strict";
import "./style.css";
// export { DropdownWithImg } from "./DropdownWithImg";
// export { DropdownButton } from "./DropdownButton";
import { DropdownWithSvg } from "./DropdownWithSvg";
import { DropdownButton } from "./DropdownButton";
import { DropdownWithImg } from "./DropdownWithImg";
const dropdown = new DropdownWithSvg();
console.log(dropdown);
document.body.appendChild(dropdown);

const dropdown2 = new DropdownButton();
document.body.appendChild(dropdown2);

const str = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z"></path></svg>`;
const dropdownCustom = new DropdownWithSvg(str);
console.log(dropdownCustom);
document.body.appendChild(dropdownCustom);

const dropdownImg = new DropdownWithImg();
document.body.appendChild(dropdownImg);
