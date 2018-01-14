import URLSearchParams from "url-search-params";
import Utl from "__GLOBAL__/utils";
import Menu from "./State/State";

const classToRender = "BGRS-Menu";
const urlParams = new URLSearchParams(window.location.search);

if (!urlParams.has("IsDlg")) {
  Utl.render(Menu, classToRender);
}
