let a = { n: 1 };//创建对象， a.n = 1
let b = a;//复制一个指向{n : 1}的指针
a.x = a /*然后进行这一步， a.x={n : 2};此时b为{ n: 1, x: { n: 2 } }， .优先级比=高， a不变*/= { n: 2 }/*首先是这一步，a = {n : 2}, */;
console.log(a);
console.log(b);


/*{ n: 2 }
{ n: 1, x: { n: 2 } }*/