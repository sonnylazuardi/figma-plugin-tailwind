import * as api from "./apiHandler";

figma.showUI(__html__);

figma.on("selectionchange", () => {
  api.uiApi.selectionChanged(figma.currentPage.selection);
});

figma.on("currentpagechange", () => {
  api.uiApi.pageChanged(figma.currentPage);
});
