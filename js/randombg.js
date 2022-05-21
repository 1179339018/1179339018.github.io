var bannerimg = [
"https://yuchenimage.oss-cn-shanghai.aliyuncs.com/%E5%B0%8F%E6%81%B6%E9%AD%94/%E5%85%89.jpg",
"https://yuchenimage.oss-cn-shanghai.aliyuncs.com/%E5%B0%8F%E6%81%B6%E9%AD%94/%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF2020.jpg",
"https://yuchenimage.oss-cn-shanghai.aliyuncs.com/%E5%B0%8F%E6%81%B6%E9%AD%94/%E5%AF%BE%E7%AB%8B_21505253013903.jpg",
"https://yuchenimage.oss-cn-shanghai.aliyuncs.com/%E5%B0%8F%E6%81%B6%E9%AD%94/%E8%8A%B1%E3%81%A8%E3%83%89%E3%83%AC%E3%82%B9.jpg",
"https://yuchenimage.oss-cn-shanghai.aliyuncs.com/%E5%B0%8F%E6%81%B6%E9%AD%94/%F0%9F%92%A0%E3%81%8A%E8%8A%B1%E3%81%AE%E3%83%95%E3%83%AA%E3%83%AB%E6%97%A5%E5%82%98%F0%9F%92%A0.jpg"
];
//获取banner图片总数，生成随机数
var bannerindex = Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.querySelector('#page-header').style.backgroundImage = "url(" + bannerimg[bannerindex] + ")";

//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1efe8fad-cd80-4a89-bd1d-5bc03c4b517d.jpg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590648514.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590688678.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590716552.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590632348%281%29.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/000000058.webp",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/000000067.webp",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/000000093.webp",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/78273944_p0_master1200%281%29.jpg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/79169571_p0_master1200%281%29.jpg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/80833168_p0_master1200.jpg"
];
//重设背景图片
var img = document.querySelectorAll(".post_bg");
for (let i = 0; i < img.length; i++) {
  //获取背景图片总数，生成随机数
  var bgindex = Math.floor(Math.random() * backimg.length);
  img[i].src = backimg[bgindex];
}
document.querySelector('#page-header').style.backgroundColor = 'rgba(0,0,0,0)';
