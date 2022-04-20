


//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1efe8fad-cd80-4a89-bd1d-5bc03c4b517d.jpg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590648514.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590688678.jpeg",
  "https://yuchenimage.oss-cn-shanghai.aliyuncs.com/background/1600590716552.jpeg"
];

//重设背景图片
var img  = document.querySelectorAll(".post_bg");
for(let i = 0;i<img.length;i++){
  //获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
  img[i].src = backimg[bgindex];
}

document.querySelector('#page-header').style.backgroundColor = 'rgba(0,0,0,0)';
