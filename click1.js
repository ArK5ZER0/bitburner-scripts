/** @param {NS} ns **/
export async function main(ns) {
  const doc = eval("document");
  doc.getElementById('unclickable').style = "display: block;position: absolute;top: 50%;left: 50%;width: 100px;height: 100px;z-index: 10000;background: red;";
  doc.getElementById('unclickable').parentNode.addEventListener('click', () => {
    doc.getElementById('unclickable').style = "display: none; visibility: hidden;";
  }, true);
}
