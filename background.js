let winId = null;

async function openOrFocus() {
  if (winId !== null) {
    try { await chrome.windows.update(winId, { focused: true }); return; }
    catch (_) { /* 닫혀있으면 새로 생성 */ }
  }
  const w = await chrome.windows.create({
    url: chrome.runtime.getURL("index.html"),
    type: "popup",         // 주소창/북마크바 없는 창
    width: 360,
    height: 640
  });
  winId = w.id ?? null;
}

chrome.action.onClicked.addListener(openOrFocus);
chrome.windows.onRemoved.addListener(id => { if (id === winId) winId = null; });
