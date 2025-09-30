// Attach dynamic bits from config
(function(){
  const c = window.KSB_CONFIG || {};
  // Fill phone links
  document.querySelectorAll("[data-phone]").forEach(el=>el.textContent=c.phonePretty||"Call Now");
  document.querySelectorAll("a[href^='tel:']").forEach(a=>a.href = "tel:"+ (c.phone||""));
  // Fill hours
  const hours = document.querySelector("#hours");
  if(hours && c.hours){
    hours.innerHTML = `
      <span class="pill">Hours: ${c.hours.weekdays}</span>
      <span class="pill">${c.hours.saturday}</span>
      ${c.emergency? `<span class="pill">Emergency: ${c.hours.emergency}</span>` : ""}
    `;
  }
  // Areas
  const ul = document.querySelector("#areas-list");
  if(ul && c.areas){ ul.innerHTML = c.areas.map(x=>`<li>${x}</li>`).join(""); }
})();