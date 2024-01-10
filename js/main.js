gsap.to("#counter", { 
    innerText: 1000, 
    duration: 2,
    ease:"power1",
    increment:1,
    snap: {
      innerText:1
    }
  });
  // 在點擊下一頁時觸發這個函數


  