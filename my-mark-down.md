## H4C2:
##### HTML4常用标签：
>```
><!DOCTYPE html> //采取html5版本来显示页面
><html> </html> 
><head> </head>
><titile> </titile>
><body> </body>
><html lang="en"> //浏览器使用语言
><meta name="" content="" /> //指定网页的关键字,不乱码的法宝
><script> </script> //用来定义一段javascript脚本
><style> </style> //用来定义一段css样式
><link /> //设置外部文件的链接标志用于确定本页面和其他文档之间的关系
><h1> </h1>
><h2> </h2>
><h3> </h3>
><h4> </h4>
><h5> </h5>
><h6> </h6>
><p> </p> //段落
><hr /> //一条横线
><br /> //换行
><strong> </strong>或<b> </b> //加粗
><em> </em>或<i> </i> //斜体
><dei> </dei>或者<s> </s> //删除线
><ins> </ins>或者<u> </u> //下划线
><div> </div> //大盒子
><span> </span> //小盒子
>
><img src="图像URL"  />
>    alt="" //图片出错时替换文本
>    title="" //鼠标放上显示文字
>    width="" //图像宽度
>    height="" //图像高度
>    border="" //边框粗细
>
><a href="#exp"> </a> //设一个连接
><h2 id="exp">早年经历</h2> //设一个标题，锚点标签
>
></table> //表格标签
>    allgn:left、center、right //对齐方式
>    border:表格边框的宽度，默认为0
>    border-collapse:collapse //表格边框合并
>    cellspacing:表格单元格之间的距离
>    cellpadding:表格里内容与边框之间的距离
>    bgcolor:表格/单元格的背景色
>    width/height：表格/单元格的宽度/高度
>    colspan //跨列合并
>    rowspan //跨行合并
>
><thead> </thead>//表格结构标签(可以没有)
><tbody> </tbody>
><tfoot> </tfoot>
><caption>标题</caption> //表格的标题和表格为一体
>
><ul> <li> </li> </ul> //无序列表
><ol> <li> </li> </ol> //有序列表
>
><dl> 
>    <dt> </dt> 
>    <dd> </dd>
></dl> //自定义列表
>
><marquee> </marquee> //跑马灯效果
>    behavior //滑动的特点
>        alternate //滑动到最右边时改变滑动的方向
>        scroll //一直保持从左往右滑动
>        slide //从左滑到右边停在最后状态
>    direction //滑动的方向
>        left //从右往左
>        right //从左往右
>        up //从下往上
>        down //从上往下
>    loop //循环的次数，默认是无限循环
>
><iframe> </iframe> //网页里的窗口
>    frameborder:0和1,0表示无边框，1表示有边框
>    src:iframe要显示的页面
>    scrolling:对网页宽高大于iframe宽高的情况，是否显示右侧和底部的滚动条
>```
>```
><form action=""> 
>    action //表单填写完毕后提交到哪里去
>    method //提交的方式:get/post
>    name //表单的名称，主要用于区分一个页面上不同的表单
>    <input type="text"> </input>
>        Type//标签类型
>        Name
>        Id
>        checked value //默认值
>        disabled //按钮为不可选
>        maxlength //输入框输入字符的宽度
>        multiple //在滑动框中可多选
>    <label for="input的#id">男</label> //鼠标点击表单以及旁边的文字也有效
>    <textarea cols="x" rows="y"> </textarea> //个人简章
>        cols //有多少行
>        rows //每行有多少个字符
>    <button type="button"></button> //表示一个按钮
>    <select><optgroup label=""> <option>1</option> </optgroup></select> //下拉列表
>        multiple="multiple" //下拉列表多选
>        size="" //展示几个选项
></form> //表单标签
>```
>
>from表单更多嵌套标签如下：
>![img-001](./images/001.png)

##### 特殊字符：
>`&emsp;`
>`&ensp;`
>![img-002](./images/002.png)

##### vscode快捷键：
>`ctrl+shift+K` //删除一行代码快捷键
>`shift + Alt + ↓` //快速复制一行代码
>`shift + Alt + F` //格式化代码
>`ctrl+/` //单行注释和取消注释
>`shift+alt+A` //多行选中多行要注释的代码
>`ctrl+d` //选定多个相同的单词
>`ctrl+g` //快速定位到某一行
>`alt+↑` //移动某一行

##### CSS2样式：
>基础选择器：
>>`某个标签名 {属性名：属性值}`
>>`.类名{属性名：属性值}`
>>`#d1{属性名：属性值}`
>>`* {属性名：属性值}`
>
>复合选择器：
>>后代选择器：元素1  元素2 { }
>>子选择器：元素1>元素2 { }
>>交集选择器：标签/类/ID选择器，选择器直接连接
>>并集选择器：元素1，元素2 { }
>>兄弟选择器：元素1+或~元素2 { }
>>伪类选择器：元素:hover
>>链接伪类选择器：
>>>a:link：未访问过的链接
>>>a:visited：点击过后的状态
>>>a:hover：悬停状态
>>>a:active：点击状态
>>
>>focus伪类选择器：input:focus
>
>字体属性：
>>font-size：字体大小
>>font-weight：normal/bold/100-900的数值，字体粗细
>>font-style：italic(斜体)/normal，字体样式
>>font-family：设置标签的字体
>>==font：复合属性==
>
>文本属性：
>>color: rgb(a) //颜色
>>text-align: left/center/right //文本对齐
>>text-decoration：none/underline/overline/lin-through //下划线/删除线
>>text-indent：px/em //缩进
>>letter-spacing：px/em //汉字、字母的间距
>>word-spacing：px/em //单词之间的间距
>>white-space：nowrap //不换行
>>word-break：break-all //强行换行
>>line-height //行高
>>overflow：//隐藏内容
>>>visible //超出部分可见，默认情况
>>>auto //内容超出显示滚动条，内容没有超出不显示滚动条
>>>hidden //超出的部分隐藏
>>>scroll //不管内容是否超出盒子，都显示滚动条
>
>列表属性：
>>list-style-type：设置li前面标识的类型
>>>none：表示没有任何标识
>>>square：实心方块
>>>disc：实心圆
>>
>>list-style-image: 可以给li设置一个图片标识
>>list-style-position：设置li的标识的位置
>>>inside：标识在内容里显示，靠右显示
>
>==list-style:复合属性==

##### CSS引入方式： 
>（内嵌式、外链式、css的行内式）

##### emmet语法： 
>`*  >  +  ^  .c1  p.c2  $  括号  {}` //快捷生成元素

##### 元素显示模式：
>块元素：`<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>`
>行内元素：`<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>`
>行内块元素：`<img />、<input />、<td>`
>display: //转换
>>block 转块级元素
>>inline-block 转行内块元素
>>inline 转行内元素
>>none 隐藏元素,隐藏元素以后，该元素就不再占位

##### css三大属性：
>层叠性：选择器相同，属性相同，值不同
>继承性
>优先级：选择器不用，属性相同，值不同

##### 盒子模型的样式： 
>(宽度、高度、边框、内/外边距、内容)

>width：px / % / em / auto:
>min-width: //最小
>max-width: 
>height: 
>min-height: //最小
>max-height:
>border-width: //边框宽度
>border-style: //线条类型
>>solid：实心线
>>dotted：点线 
>>dashed：虚线 
>>double：双线
>
>border-color：//边框颜色
>border-top/bottom/left/right //每个方位边框设置
>==border: 1px solid red==
>padding：//内边距
>margin：//外边距
>>auto //水平居中
>
>外边框上下合并：只设置一边的外边距，尽量避免两边都设置。
>
>嵌套盒子外边距离塌陷-解决方法：
>>1：给外面的盒子加顶部边框
>>2：给父元素设置overflow：hidden/auto/overlay等等
>>3：给父元素设置内上边距，不要给子盒子设置外边距

##### CSS浮动：
>float：left/right

特性：
>1：不占位、只会影响后面的元素
>2：一行显示，顶端对齐、如超出另起一行
>3：中间没有缝隙、不给父盒子设置高度的情况下会导致父盒子高度塌陷
>4：浮动的盒子外边距不会折叠、浮动元素的顶边不能比父元素的顶边高
>5：浮动元素后面的元素顶边不能比前面任何一个浮动元素的顶边高
>6：添加了浮动的元素具有行内块的特性，对行内元素来说，此时宽高是生效的

##### 清除浮动：
>1：额外标签法
>>添加一个兄弟标签然后设置clear：left/right/both(通用)
>
>2：父级添加overflow属性
>3：给父元素添加after伪元素：
>```
>.clearfix:after {  
>   content: ""; 
>   display: block; 
>   height: 0; 
>   clear: both; 
>   visibility: hidden;  
> } 
> .clearfix {  /* IE6、7 专有 */ 
>   *zoom: 1;
> }
> ```
>4：给父元素添加双伪元素：
>```
>.clearfix:before,.clearfix:after {
>   content:"";
>   display:table; 
> }
> .clearfix:after {
>   clear:both;
> }
> .clearfix {
>    *zoom:1;
> }
> ```

##### 书写顺序：
>1：布局定位属性
>2：自身属性： 
>3：文本属性： 
>4：其他属性

##### CSS定位： 
>position

>1：静态定位 //static
>2：相对定位  //relative
>>占位为偏移前的位置
>>相对自己原来的位置
>
>3：绝对定位 //absolute
>>不占位，完全脱标
>>相对的是有定位的祖先元素，如果没有就是初始包含块
>>可以到有定位的父级盒子外面的
>>高度由内容决定
>
>4：固定定位 //fixed
>>不占位
>>参照浏览器的可视区域
>>初始位置该在哪里就在哪里
>>可和margin连用
>
>5：粘性定位 //sticky
>>占位
>>参照浏览器的可视区域
>>必须添加边偏移才有效
>>初始位置取决于marin-top,滚动的哪里固定住取决于top

##### 定位的特性：
>1：行内元素添加绝对/固定定位，和浮动类似，会导致行内元素宽高生效。
>2：如果父盒子不占位，不设值的话会塌陷，值为0
>3：父盒子/子盒子设为绝对/固定定位时，不会发生外边距塌陷的问题
>4：不会文字环绕
>5：当不设置盒子的大小时可以给4个边设置边偏移来实现

##### 初始包含块： 
>(作用在document和html之间)

>作用：
>>1：让初始页面有撑开高度；
>>2：绝对定位时子绝父不相相对的就是初始包含块

##### 堆叠顺序：
>z-index:0

##### 隐藏元素且占位：
>visibility:hidden

##### 精灵图： 
>background-position

##### Css三角： 
>宽和高设为0，边框加粗，然后再用transparent把其他边框设置成透明色

##### 光标样式： 
>cursor:pointer //光标呈现为指示链接的指针（一只手）
>[光标样式](https://www.w3school.com.cn/cssref/pr_class_cursor.asp)

##### 文字溢出省略： 
>(必须建立在块级标签上)

>单行文本不换行
>>white-space: nowrap;
>>text-overflow: ellipsis;
>>overflow: hidden;
>
>多行文本不换行
>>display: -webkit-box;
>>-webkit-box-orient: vertical;
>>-webkit-line-clamp: 1;
>>overflow: hidden;

##### 字体图标的使用：
>1：下载字体
>2：拷贝字体文件夹到目录里
>3：style里定义字体
>4：使用字体图标，拷贝图标对应的二进制信息，并设置font-family为我们定义的字体

##### vertical-align:
>1：baseline:图片与文字基线对齐，默认的情况
>2：bottom:文字的底线和图片的底线对齐
>3：top:文字的顶线和图片的顶线对齐
>4：middle：图片的垂直中线和x-height的1/2处对齐
>特点：
>>1：当给盒子设置middle时会在x-height的1/2处对齐
>>2：行内块元素默认基线在底部，当设置内容时基线在最后一行文字基线处

##### 幽灵节点： 
>(默认图片底线和文字基线对齐，图片底部会有空白，这是HTML5的特点)

>解决方法：
>1：给图片设置vertical-align属性，值为非baseline即可。
>2：把图片变块级，display:block
>3：font-size:0或者line-height:0

用vertical-align实现图片的垂直居中：    
>1：图片设置vertical-align:midlle
>2：盒子设置line-height让文字垂直居中
>3：将盒子里文字的font-size设为0

##### 可继承属性：
>font开头
>line开头
>text开头
>colour

## H5C3新增样式：
##### HTML5新增标签：
>布局标签：
>```
><header> //页眉
><nav> //导航栏
><article> //左内容栏
><aside> //右内容栏
><section> //节
><footer> //页脚
><figure> //图像标签，包含<img>和<figure>
><mark> //加上能给文字添加背景色，默认是黄色
><abbr> //给缩写的文字添加弹框显示全称
>```

>多媒体标签：
>```
><video> //视频标签
><source> //可设置多个后缀名不同的文件，然后挨个往下匹配，以免有兼容性问题
>    src：视频路径
>    controls：显示播放控制按钮（播放/暂停），必加属性
>    width：设置播放控件的宽度
>    height：设置播放控件的高度
>    loop：设置了loop会循环播放视频
>    poster：等待播放时显示的图片
>    muted：静音播放视频
>    autoplay：自动播放视频，注意：要想自动播放，必须静音才行
><audio> //音频标签
>    controls：显示播放控件，必加属性
>    loop:循环播放
>    autoplay:自动播放
>```

>新填表单元素：
>Type="email" //要有@以及后面的内容
>>url：前面一定要加协议
>>date
>>time
>>month
>>week
>>number
>>tel
>>search
>>color:hsl/rgb/hex,hsl表示色相、饱和度、亮度
>
>autofocus:输入框自动获得焦点，只有一个
>autocomplete:自动提示历史选项,一定要添加name属性
>form属性:对当前控件指定所属的form表单，属性的值为form表单的id值
>multiple:设置是否允许多个email/url等等，逗号分隔
>pattern:自己写正则表达式定义填写规则,格式不正确会错误提示框
>placeh older:给输入框添加未输入内容的提示信息
>required：必填项

##### CSS3新增特性：
>**选择器：**
>属性选择器：
>格式：基础选择器[属性内容] --> 交集选择器，权重以中括号为准，一对中括号是10
>>li[id]：表示设置了id属性的li元素
>>li[id="d1"]：表示设置了id属性并且属性的值为d1的li元素
>>li[id^="d"]：表示设置了id属性并且属性的值以d开头的li元素
>>li[id$="1"]：表示设置了id属性并且属性的值以1结尾的li元素
>>li[id*="2"]：表示设置了id属性并且属性的值包含字符2的li元素
>
>结构伪类选择器：
>>E:first-child：以E元素里面的兄弟为参照，选择第一个
>>E:last-child：以E元素里面的兄弟为参照，选择最后一个
>>>last-child在`<body>`里面不生效的原因是系统默认会在后面加一些标签
>
>>E:nth-child(n)：以E元素里面的兄弟为参照，选择第n个,n可为数字、公式、单词
>>E:nth-lost-child(n)：以E元素里面的兄弟为参照，选择倒数第n个
>>
>>E:first-of-type：以E元素里面的E为参照，选择第一个
>>E:last-of-type：以E元素里面的E为参照，选择最后一个
>>
>>E:nth-of-type(n)：以E元素里面的E为参照，选择第n个
>>nth-last-of-type(n)：以E元素里面的E为参照，选择倒数第n个
>
>伪元素选择器: //伪元素选择器权重为1
>>```
>>.box::before{ //元素的前面输入内容
>>	content: "我"; //输入的值，必须写
>>}
>>```
>>```
>>.box::after  { //元素的后面输入内容
>>	content: "小猪佩奇";
>>}
>>```
>>字体图：content: '\e91e';
>
>伪类选择器：
>>E:not(选择器X)：除了选择器X其他的都选中
>>#box1:target：当点击box1连接时当前元素的target选择器被选中
>>#man:checked+span：当点击input按钮时span选择器被选中

##### 盒子文字属性：
>盒子属性：box-sizing:border-box //盒子不变，内容区变小
>>content-box //默认情况
>
>矩形的弧度：border-radius：
>>border-top-left-radius：
>>border-radius：水平方向圆弧半径 垂直方向圆弧半径
>
>盒子阴影：（中间必须用逗号隔开可设置多个阴影，结尾必须用逗号）
>box-shadow: h-shadow：阴影的水平位置
>>v-shadow：阴影的垂直位置
>>blur：模糊程度
>>spread：阴影的尺寸
>>color：
>>inset：内部阴影
>
>文字阴影：
>>text-shadow: h-shadow 
>>v-shadow 
>>blur 
>>color

##### css的背景：
>background-color: //颜色
>>transparent //透明
>
>background-image:url; //图片背景
>background-repeat: //图片平铺
>>no-repeat 不平铺
>>repeat-x x轴上平铺，y轴上不平铺
>>repeat-y y轴上平铺，x轴上不平铺
>>repeat x轴和y轴上都平铺，默认情况
>
>background-position：x y;//图片位置
>>水平方向(left/right/center),垂直方向(top/bottom/>center)
>
>background-attachment: 
>>scroll：背景跟随一起滚动
>>fixed：背景固定
>
>==background: 背景颜色 背景图片 背景重复 背景固定 >背景位置 //复合属性==

##### CSS3背景：
>(一个盒子可以有多个背景图片用逗号间隔，先设置的在上，后设置的在下)
>
>背景平铺基准：
>background-clip：//从内边距的外边界开始铺
>>border-box：覆盖整个边框
>>padding-box：不覆盖边框
>>content-box：从内容区的外边界开始显示图片，
>>（padding区和边框区的背景都被裁剪了）
>
>背景定位基准：
>background-origin：决定background-position的初始位置
>>border-box：从边框的左上角开始铺背景图片
>>padding-box：从内边距的外边界开始铺背景图片
>>content-box：从内容区的左上角开始铺背景图片
>
>文字背景：-webkit-background-clip: text; 
>
>浏览器标题条：-webkit-app-region: drag;
>
>背景图片的大小：
>background-size:
>>px %
>>contain：图片宽高比不变的情况下，图片能覆盖整个盒子
>>cover：图片宽高比不变的情况下，宽/高有一个先和盒子的宽/高一致的>位置
>
>背景图片滤镜：
>filter:
>>none：默认，没有效果。
>>blur()：模糊度px
>>grayscale()：灰度0~1
>>opacity()：透明度0~1//有继承性，背景生效内容也生效，可叠加
>>sepia()，红褐色100%~0
>>invert()：反向色0%~100
>>brightness()：亮度0%~100%+ 
>>contrast()：对比度0%~100%+
>>saturate()，饱和度0%~100%

##### 函数：
>calc(表达式) //函数表达式，单位：%、px、em、rem，运算符：+ - * /（中间用空格隔开）
>attr(元素) //把元素里面的属性提取出来

##### CSS3渐变：
>**线性渐变：**
>>background-image: linear-gradient();
>>>x deg：角度，以xy轴为参照，-180~180，默认是180
>>>color x%/xpx：颜色的范围
>>>to 方位：以对角线为参照
>>>background-image: repeating-linear-gradient(); //重复线性渐变
>
>**径向渐变：***
>>background-image:radial-gradient();
>>>color x%/xpx：颜色的范围
>>>50px 50px at 30% 30%,yellow ,green // 垂直半径 水平半径 at x轴位置 y轴位置

##### CSS3过渡：
>transition-property: all; //过度属性
>transition-duration: 3000ms; //过度时间
>transition-delay:2s; //过度延迟时间
>transition-timing-function：ease; //过度方式
>>ease：默认值，慢速开始，然后加速，再减速
>>linear：整个过程匀速
>>ease-in：逐渐加速
>>ease-out：逐渐减速
>>cubic-bezier()，指定一个三次方的贝塞尔曲线。地址为：[贝塞尔曲线](https://cubic-bezier.com)
>
>==复合属性transition:property duration timing-function delay==

##### CSS3-2D转换：
>变换：
>>transform-：可有多个变换，中间空格隔开，变换决定性质不决定过程
>>>translate(x,y)：平移，x轴y轴的距离，占位不变，行内元素不生效，(-50%,-50%)
>>>rotate(xdeg)：旋转，默认基点为中心点rotateX/Y：沿着X/Y轴中线旋转
>>>scale(x,y)：缩放，x、y为倍数, scaleX/Y
>>>skew(xdeg,ydeg)：扭曲，类似于平行四边形
>>>origin: x y：改变旋转基点
>
>关键帧动画：
>>定义：@keyframes 动画名{}
>
>使用：
>>animation-name: 动画名
>>animation-duration: xs：播放时间
>>animation-delay:延迟时间
>>animation-steps(x)：X帧播放视频
>>animation-timing-function：设置运动曲线
>>animation-iteration-count: x：循环次数，第二次没有延迟，infinite为一直动
>>animation-direction:动画循环的方向
>>>reverse
>>>alternate：从0%-100%，再从100%-0%
>>>alternate-reverse：从100%-0%，再从0%-100%，
>>
>>animation-fill-mode:动画等待或者结束之后的状态
>>>forwards:等待-初始状态，结束-100%
>>>backwards:等待-第一帧，结束-初始位置
>>>both:等待-第一帧，结束-100%
>>
>>animation-play-state:表示动画的执行和暂停
>>>running：表示执行动画
>>>paused：表示暂停
>>
>>==复合属性animation：==
>>>==animation: name duration timing-function delay iteration-count; //常用==
>
>特点：
>>1：自动播放
>>2：播放完回到初始位置
>>3：关键字：form、to/0%、100%

##### 常见的布局方式：
>流式布局：需要随着窗口大小变化而变化的需要用百分比来布局
>
>响应式布局：
>>媒体查询：
>>>@media 媒体类型 关键字 (media feature) {CSS-Code;} 
>>>>媒体类型: all/screen/print:全部/屏幕/打印机
>>>>关键字：and  ,(or)  not  only：
>>>>media feature：
>>>>>1：min-width：大于
>>>>>2：max-width：小于
>>>>>3：orientation：portrait(竖屏)、landscape(横屏)
>>>>>4：-webkit-device-pixel-ratio:n //判断n X图
>>
>>媒体特征：可以用"and"和"，"来连接多个条件
>>>特点：媒体类型可以省略、ie9+、可外链式
>
>弹性布局（flex布局）:
>>父项常见属性：
>>>1：flex-direction：改变主轴
>>>>row：从左往右(默认)
>>>>row-reverse：从右往左
>>>>column：从上往下
>>>>column-reverse：从下往上
>>>
>>>2：justify-content：设置主轴上元素的对齐方式
>>>>flex-start：主轴上，整体左对齐
>>>>flex-end：主轴上，整体右对齐
>>>>center：主轴上，整体居中
>>>>space-around：主轴上，子盒子的左右外边距相同
>>>>space-between：两边靠边，中间的平分主轴上的剩余空间
>>>>space-evenly：主轴上，盒子中间以及两边距离相同
>>>
>>>3：flex-wrap：
>>>>nowrap：不换行
>>>>wrap：换行
>>>>wrap-reverse：垂直轴反向换行
>>>
>>>4：align-items：只有一行时，侧轴上的排列方式
>>>>flex-start：侧轴上，在上面显示
>>>>flex-end：侧轴上，在下面显示
>>>>center：侧轴上，居中显
>>>>stretch：在不设高度的情况下，撑满父级
>>>
>>>5：align-content：侧轴有多行时，侧轴上的排列方式
>>>>flex-start: 顶部排列显示
>>>>flex-end：底部排列显示
>>>>center：中间排列显示
>>>>space-around：侧轴上，子盒子的上下外边距相同
>>>>space-between：侧轴上，两边靠边，中间的平分侧轴上的剩余空间
>>>>space-evenly：侧轴上，盒子中间以及两边距离相同
>>>>stretch：在不设高度的情况下，撑满父级
>>
>>子项常见属性：
>>>1：flex :x：子项在主轴所占的宽/高份数
>>>2：flex-grow: x：在主轴，排完之后，有剩余空间，分给设置了flex-grow的元素
>>>3：flex-shrink：弹性收缩因子
>>>>宽度相同，因子相同
>>>>宽度相同，因子不同
>>>>宽度不同，因子相同
>>>>宽度不同，因子不同：宽度的比例乘因子的比例
>>>>flex-shrink:0 //防止盒子flex后自动压缩
>>>
>>>4：flex-basis: 0 //默认把宽高设置成0
>>>5：align-self：设置子项在侧轴上的排列方式
>>>>flex-start
>>>>flex-end
>>>>center
>>>>stretch
>>>
>>>6：order：设置子项在主轴上排列的顺序，默认是0，值越小越靠前

##### BFC:
>触发BFC的方式：
>>1：浮动可以形成BFC
>>2：绝对/固定定位可以形成BFC
>>3：display设置为inline-block/flex等等
>>4：overflow对块元素设置不是visible的值。
>>5：display设置为flow-root。
>
>需要触发BFC的BUG：
>>1：两个盒子margin会重叠
>>2：浮动的盒子重叠
>>3：父盒子外边距塌陷
>>4：父盒子高度塌陷
>
>子盒子在父盒子居中的方式：
>>1：子盒子绝定定位，且left/top/bottom/right为0，margin为auto
>>2：子盒子绝对定位，left/top为50%，margin-left/margin-top分别为-自己宽高的一半
>>3：子盒子绝对定位，left/top为50%，transform为translate(-50%,-50%)
>>4：flex

## JavaScript：
>`<script> </script>`

##### 函数：
>alert(msg)	浏览器弹出警示框
>console.log(msg)	浏览器控制台打印输出信息
>console.dir(func) 查看对象的属性和方法
>prompt("提示信息"，默认值)	浏览器弹出输入框，用户可以输入
>confirm("单击'确定'继续。单击'取消'停止。")	浏览器弹出确认框
>document.write(msg)	把内容作为网页的内容进行展示
>isNaN(x) //判断x是否为非数字，返回值为true/false
>
>转换：
>>.toString(x) 字符类型的转换
>>String(x) 
>>parseInt(x) 数字类型的转换
>>parseFloat(x) 浮点类型的转换
>>Number(x) 强行转换成数字型 
>>Boolean(x) 布尔类型的转换
>>throw new Error("形参实参个数不一致"); //主动报错函数；
>
>声明：
>>1：function 函数名(形参1,形参2...) {//函数体代码}
>>2：var 函数名= function(形参1,形参2...){//函数体代码}
>>3：var fn = new Function("形参", "形参", "函数体");
>
>调用：
>>函数名(实参1,实参2...);

##### 属性：
>变量名.length //返回字符串的长度
>
>关键字:
>>var 变量名;
>>typeof 变量名; //获取变量数据类型
>>变量名 instanceof 类型 //用来判断复杂数据类型
>>Object.prototype.toString.call() //返回所有数据类型
>>continue;
>>break;
>>return 变量名；
>
>对象：
>>arguments
>>callee
>>window：顶级对象
>
>变量：
>>this：这个变量存储的是一个对象的地址

##### 流程控制：
>顺序结构：
>选择结构：
>>```
>>if (条件表达式) {} else {}
>>表达式1 ? 表达式2 : 表达式3;
>>```
>>```
>>switch( 表达式 ){ 
>>    case value1:表达式;break;
>>    case value2:表达式;break;
>>    default:表达式;
>>}
>>```
>循环结构：
>>```
>>for(;;){}
>>while () {}
>>do{}while ();
>>```


##### 数据类型：
>简单数据类型：
>>Number：实数、二进制，`Number.MA/IX_VALUE：,Infinity/-Infinity/NaN`
>>String：
>>Boolean //true/false
>>Undefined
>>Null //空
>>Symbol 
>>Bigint //大整型
>
>复杂数据类型
>>Object:
>>Object
>>Function
>>Array：
>>>var 数组名 = new Array(实参1,实参2); 参数一个时：长度；多个时：元素
>>>var 数组名 = [];
>>
>>Math
>>Date
>>RegExp //正则表达式
             

##### 转义字符：
>`\n`：换行符
>`\\`：反斜杠 
>`\'`：单引号
>`\"`：双引号
>`\t`：tab缩进

##### 运算符即优先级：
![img-003](./images/003.png)

##### 栈和堆：
![img-004](./images/004.png)
![img-005](./images/005.png)
>在Js里面数据都存在推内存里，分为栈结构和堆结构

##### 作用域：
>全局作用域：用var和不用var申明的变量，关闭浏览器时释放
>局部作用域：在函数里用var申明的变量，函数执行完时释放
>Js中没有块级作用域（在ES6之前）

##### 执行环境和执行环境栈：
>执行环境：
>>1：全局环境（Global Context）
>>2：函数环境（Function Context）
>>3：Eval函数环境（Eval Context）
>
>执行环境栈：
>>![img-006](./images/006.png)
>>关于执行栈有5点需要记牢：
>>>单线程
>>>同步执行
>>>只能有1个全局环境
>>>任意多个函数环境
>>>每次调用函数就会新建一个环境，即使函数调用自身也是如此

##### 函数传值：
>基本数据类型：
>复杂数据类型：
>![img-007](./images/007.png)
>![img-008](./images/008.png)

##### 作用域链：
>![img-009](./images/009.png)

##### 预解析：
>变量提升/函数提升
>代码执行分两步走：
>>1：预解析(只对变量和函数处理，把带var的变量和函数的声明提前进行) 
>>2：代码执行(一行一行地执行)

##### 立即调用函数表达式IIFE： 
>(定义时执行，且一次)

>格式：
>>1：(function () {statements})();
>>2：(function () {statements}());
>
>作用：防止变量名污染/可用于项目初始化/隐藏内部代码

##### 函数的回调：
>![img-010](./images/010.png)

##### 函数的递归：

##### 面向对象：
>概念：
>>1：属性：事物的特征，在对象中用属性来表示（常用名词）
>>2：方法：事物的行为，在对象中用方法来表示（常用动词）
>
>创建对象的方式：
>>1：字面量创建：
>>```
>>var 对象名 = {
>>    属性名n: 属性值,
>>    方法名: function() {…}
>>}
>>```
>>2：内置构造函数创建:
>>```
>>var 对象名 = new Object();
>>obj.属性名n = 属性值n; 或 obj["属性名n"] = 属性值n;
>>obj.方法名 = function(){...}
>>```
>>3：自定义构造函数创建：
>>```
>>function 构造函数名(形参n…) {
>>    this.属性名n = 属性值n;
>>    this.方法名 = function() {函数体};
>>}
>>var 对象名 = new 构造函数名(实参n…)
>>```

##### 对象的增删改查：
>查：
>>1：对象.   
>>2：对象["属性名"];
>>3：对象.方法名();
>
>增/改：有则更改，无则增加
>删：
>>1：delete 对象.属性名;
>>2：delete 对象["属性名"];
>>3：delete 对象.方法名();

##### 对象的遍历：
>for(let key in 对象){ } //key表示对象的属性名和方法名/索引
>for(let value of 非对象) //value表示值

##### 构造函数：
>和普通函数的区别：
>>1：调用方式不同：构造函数一般有new
>>2：返回值不同：构造函数返回的是实例对象或复杂数据对象，普通函数返回的是返回值
>>3：this不同：构造函数是实例对象，普通函数是window

##### this：
>![img-011](./images/011.png)

##### new：
>1：堆内存里开辟空间
>2：this变量指向该内存
>3：执行函数的代码
>4：生成对象的实例并将空间的地址返回

##### 原型对象：
>显式原型对象：prototype属性值
>隐式原型对象：__proto__属性值
>原型对象属性：constructor：（Star.prototype.constructor === Star）
>原型链：
>>![img-012](./images/012.png)

##### 改变函数内部this的指向：
>fn.call(a,b,c)：//Function原型对象上的一个方法
>>功能：改变fn中的this指向：nullish为window，基本类型为包装对象，复杂类型为本身，并调用fn
>>参数：a：参考的指向，b/c/...：调用fn时传递的实参
>>返回值：调用fn时的返回值
>
>fn.apply(a,[b,c])：//Function原型对象上的一个方法
>>功能：同call
>>参数：a：参考的指向，第二个参数为数组，为其调用fn时传递的实参
>>返回值：同call
>
>fn.bind(a)：//Function原型对象上的一个方法
>>功能：同call
>>参数：a：参考的指向，b/c/...：调用fn时传递的实参，可传可不传
>>返回值：为改变了this后的fn

##### 内置对象：
>JSON对象：轻量级的数据交换格式
>var json_str = JSON.stringify(obj/Array) //把obj/Array转换成字符串
>var json_obj/Array = JSON.parse(json_str) //把字符串转换成obj/Array
>可以用来深拷贝但是值为非基本类型和非数组对象时不能使用

##### Math对象:
```
Math.PI //圆周率
Math.ceil() //向上取整
Math.floor() //向下取整
Math.trunc() //方法会将数字的小数部分去掉， 只保留整数部分
Math.round()	//四舍五入版 就近取整 注意 -3.5 结果是 -3
Math.abs() //绝对值
Math.max() //Math.min()	求最大和最小值
Math.random() //获取范围在[0,1)内的随机值
Math.pow() //幂运算
Math.sin() //正弦运算
Math.sign() //判断一个数,正数(返回1)负数(返回-1) 0(返回0) NaN(返回NaN)
Math.sqrt() //平方根
Math.cbrt() //立方根
Math.hypot() //求所有参数平方和的平方根(勾股定理)
```

##### Date函数: 
>(实例化后才能使用)

>```
>date.getFullYear(); //年
>date.getMonth() + 1; //月
>date.getDate(); //日
>date.getDay(); //星期
>date.getHours(); //时
>date.getMinutes(); //分
>date.getSeconds(); //秒
>date.getMilliseconds(); //毫秒	
>```
>
>1970年1月1日0点起到现在经过的毫秒数:
>```
>date.getTime();
>date.valueOf();
>Date.now();
>+new Date();
>```
>本地格式化字符串:
>```
>date.toLocaleTimeString();
>date.toLocaleDateString();
>```

##### 包装对象：
>```
>n = new Number("100");
>s = new String(123);
>b = new Boolean(true);
>```

##### Number对象的静态方法:
>```
>Number.parseInt(str) //将字符串转换为对应的数值（和global的parseInt一致）
>Number.isFinite(i) //判断是否是有限大的数
>Number.isNaN(i) //判断是否是NaN
>Number.isInteger(i) //判断是否是整数
>
>Number对象：n.toFixed(n) //截取小数点后n位
>```

##### Object对象的静态方法：
>```
>Object.assign(obj1, obj2...) //把后边所有对象拼接到obj1上
>Obejct.is() //判断两个对象是否相等, 修复了NaN不等NaN的问题
>Object.freeze() //冻结原对象,返回原对象引用,对象变成了只读
>Object.seal() //封闭原对象,返回原对象引用,不能增删，但是能改查
>Object:hasOwn(obj,"属性名") //只检测自有属性
>```

##### Objec对象原型对象上的方法：
>```
>hasOwnProperty("属性名") 只检测自有属性
>Entries() //分别用来获取键值对组成的迭代器对象
>Key s() //所有的key组成的迭代器对象
>Values() //所有的值组成的迭代器对象
>```

##### 字符串对象：
>```
>s.indexOf(s1, [index]) //从前往后查找s1从index开始
>s.lastIndexOf(s1, [index]) //从后往前查找s1从index开始
>s.charAt(index) //查找索引为idnex的元素
>s.charCodeAt(index) //查找索引为idnex的元素返回值为ASCLL
>str[index]  //h5新增方法
>s.concat(s1, s2, ...) //拼接字符串
>String.fromCharCode(unicode,...) //ASCII码对应的字符组成的字符串
>s.trim() //去字符串的前后空格
>s.trimEnd() //去字符串的后空格
>s.trimStart() //去字符串的前空格
>s.endsWith() //判断字符串末尾否包含某个字符
>s.startsWith() //判断字符串开头否包含某个字符
>s.padStart() //当字符串不够某个长度的时候，在前边补规定的字符
>s.padEnd() //当字符串不够某个长度的时候，在后边补规定的字符
>*s.replace(regexp/s1, s2) //找到regexp/s1替换成s2
>s.localeCompare(s1) //比大小，返回值1/-1/0
>*s.slice(start, [end]) //截取[start,end)
>*s.split("p", 3)	 //切割
>s.substr(start, [length]) //start表示从哪开始截取，length表示截取的长度s.substring(start, end) //类似于slice，区别是不支持负数 
>s.toLowerCase()	//转换为小写，返回新字符串
>s.toUpperCase()	//转换为大写，返回新字符串
>s.valueOf() //有PrimitiveValue就返回它的值；没有则返回对象本身
>s.toString() //把一个n换为字符串 
>// ES6中字符串的操作方法：
>*s.includes(s1)	判断是否包含指定的字符串
>*s.startsWith(s1)	判断是否以指定的字符串开头
>s.endsWith(s1)	判断是否以指定字符串结尾
>s.repeat(count)	将字符串s重复count次返回
>
>常见方法：
>s.match(regexp/substr) //找到一个或多个与子串/正则表达式的匹配，返回数组
>s.search(regexp/substr) //在字符串里查找正则能匹配的第一个子串并返回索引
>s.replace(regexp/substr,replace) //替换一个/多个与子串/正则表达式匹配的子串
>```

##### 数组对象：
>`Array.isArray(arr)`
>>功能：判断arr是否是一个数组
>>参数：[1]为一个数据
>>返回值：布尔值
>
>`Array.from(pArr) `
>>功能：将伪数组或可遍历对象转换为真数组
>>参数：[1]伪数组
>>返回值：将为数组转换后的真数组
>
>`Array.of(v1, v2, v3) `
>>功能：将一系列值转为数组，解决了new Array()传一个数即长度的问题
>>参数：[n]为需转成数组每项的数据
>>返回值：一个转换后的伪数组
>
>`arr.includes(s1)`
>>功能：判断数组arr里是否包含s1，需匹配类型
>>参数：[1]为一个数据
>>返回值：布尔值
>
>`arr.at(index)`
>>功能：和arr[index]类似 但是可以倒着查找，最后一个为-1
>>参数：[1]为一个数字或数字字符串
>>返回值：返回对应下标的值，找不到时返回undefined
>
>**`arr.push("s1", "s2"…)`**
>>功能：改变原数组，在其后面依次添加其传递的参数(arr+s1+s2)
>>参数：[n]为其添加的数据
>>返回值：为数组长度
>
>**`arr.unshift("s1", "s2"…)`**
>>功能：改变原数组，在其前面依次添加其传递的参数(s1+s2+arr)
>>参数：[n]为其添加的数据
>>返回值：为数组长度
>
>**`arr.pop()`**
>>功能：改变原数组，删除其最后的一个值
>>参数：[0]无论有啥参数都是一个功能
>>返回值：返回被删除的这个值
>
>**`arr.shift()`**
>>功能：改变原数组，删除其最前的一个值
>>参数：[0]无论有啥参数都是一个功能
>>返回值：返回被删除的这个值
>
>**`arr.reverse()`**
>>功能：改变原数组，对其进行翻转
>>参数：[0]无论有啥参数都是一个功能
>>返回值：返回原数组(被翻转)
>
>**`arr.sort((a,b)=>{return a-b}) `**
>>功能：改变原数组，对其进行排序
>>参数：[1]可以是一个回调，当排序数的位数大于两位时就只会对比其第一位，此时就可以传递一个回调，接收b：当前的值，a：下一个值，然后对其遍历，return a-b(升序)/b-a(降序)，当return为正数时保留b，相反保留a
>>返回值：返回原数组(被排序)
>
>`arr.indexOf(s1, [index])`
>>功能：通过值或连同下标从前往后查找想要的值
>>参数：[2]s1：寻找arr中是否有s1，index：从第几个开始查找，可负数
>>返回值：返回其第一个找到值的下标，没找到返回-1
>
>`arr.lastIndexOf(s1, [index]) `
>>功能：通过值或连同下标从后往前查找想要的值
>>参数：同indexOf
>>返回值：返回其从后往前第一个找到值的下标，没找到返回-1
>
>**`arr.join("-")`**
>>功能：不变原数组，将数组转换成一个去掉"[ ]"的字符串
>>参数：[1]为每个值中间的连接符，且会被toString以下，默认为逗号
>>返回值：为一个被转换后的字符串
>
>**`arr.concat([4,4,4],[5,5,5])`**
>>功能：不变原数组，将其参数合并到arr上
>>参数：[n]为数据，每一个数据都会合并到arr上，数组是展开后合并
>>返回值：为被合并后的数组
>
>**`arr.slice(index,[index2])`**
>>功能：不变原数组，切片[index- index2)的值(包头不包尾)
>>参数：[2]开始的下标和结束的下标
>>返回值：为被切片的数组，下标不对应时返回空数组
>
>**`arr.splice(index, [num], [v1,v2 ...]) //可浅拷贝`**
>>功能：改变原数组，从index删除num个值(含自己)，并添加v1,v2...
>>参数：[3]index：下标(不规范时删除所有)，num：个数，之后是添加的数据
>>返回值：被删除的值组成的数组，下标不规范时返回全部
>
>`arr.fill(str,[indexS], [indexE])`
>>功能：改变原数组，将str填充到arr中, 从indexS开始indexE结束(包头不包尾)
>>参数：[3]str：填充的数据，indexS：开始的下标，indexE：结束的下标
>>返回值：原数组(填充后)
>
>`arr.flat(Infinity) `
>>功能：不变原数组，降维打击
>>参数：[1]多少维度被打击，一般写一各Infinity
>>返回值：被打击后的数组
>
>**`arr.forEach((item, index, arr) => {})`**
>>功能：对arr进行遍历
>>参数：[1]一个回调函数，回调接收参数：item：arr每项，index：arr每项下标，arr：被遍历数组
>>返回值：undefined
>
>**`arr.map((item, index, arr) => {return item * 2}) //可浅拷贝`**
>>功能：没变原数组，对数组的每一项进行操作，映射出一个新值
>>参数：同forEach
>>返回值：为对每一项操作后映射的新数组
>
>**`arr.some((item, index, arr) => {return 判断})`**
>>功能：遍历数组判断每一项，一真即真
>>参数：同forEach
>>返回值：布尔值，return后的判断只要为真就返回true，否则false
>
>**`arr.every((item, index, arr) => {return 判断})`**
>>功能：遍历数组判断每一项，一假即假
>>参数：同forEach
>>返回值：布尔值，return后的判断全部为真就返回true，否则false
>
>**`arr.filter((item, index, arr) => { return 判断 })`**
>>功能：不变原数组，遍历数组对每项进行判断过滤，当return后为true则保留该项，否则删除
>>参数：同forEach
>>返回值：为所有符合条件被筛选出来的值组成的数组
>
>**`arr.reduce((参数1,参数2,参数3,参数4) => { return 表达式 },参数p)`**
>>功能：万物皆可reduce，一般常用于累计
>>>参数1：上一次回调函数的返回值（第一次是初始值）prev
>>>参数2：本次的数组元素item
>>>参数3：本次数组元素的下标index
>>>参数4：原数组的引用
>>>参数p：累加的初始值（如果没有，默认是数组的第一个值）
>>
>>返回值：返回累加后的值（最后一次回调函数返回的值）
>
>ES6的方法：
>`arr.find((item, index, arr) => { return 判断 })`
>>功能：遍历数组根据判断对其值进行查找，找到第一个后停止
>>参数：同forEach
>>返回值：第一个满足条件的item项
>
>
>`arr.findIndex((item, index, arr) => { return 判断 })`
>>功能：同find
>>参数：同forEach
>>返回值：第一个满足条件的item的下标

##### 正则表达式： 
>(匹配字符串)

>创建方式：
>>1：`var rg = /123/;`
>>2：`var regexp = new RegExp(/123/);`
>
>测试正则表达式:
>>`rg.test(str)`方法: //匹配成功返回true，不成功返回false
>>`rg.exec(str)`方法: //匹配成功结果以数组形式返回；匹配不成功返回null
>
>正则表达式中的特殊字符:
>`^`：表示匹配行首的文本（以谁开始）
>`$`：表示匹配行尾的文本（以谁结束）
>`[ ]`：方括号中的字符只要匹配其中一个就可以了
>`*`：重复0次或更多次
>`+`：重复1次或更多次
>`?`：重复0次或1次
>`{n}`：重复n次
>`{n,}`：重复n次或更多次
>`{n,m}`：重复n到m次
>`\d`：匹配0-9之间的任一数字，相当于`[0-9]`
>`\D`：匹配所有0-9以外的字符，相当于`[^0-9]`
>`\w`：匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`
>`\W`：除所有字母、数字、下划线以外的字符，相当于`[^A-ZA-Z0-9_]`
>`\s`：匹配空格（包括换行符、制表符、空格符等），相当于`[\t\r\n\v\f]`
>`\S`：匹配非空格的字符，相当于`[^\t\r\n\v\f]`
>`.`：匹配除`\n` `\r`以外的任意字符，如果需要只匹配点（.），需要在正则里用转义字符`\.`替代
>`|`：满足两个条件其中一个
>`()`：表示优先级，还有分组功能，对象. groups.属性
>`i`：执行对大小写不敏感的匹配
>`g`：执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
>`m`：执行多行匹配，字符串中有`\n`，一般和^或$配合使用，多行匹配时还要加上g修饰符

##### DOM：
>获取元素·：
>>```
>>document.getElementById(id) //返回对象
>>document.getElementsByTagName('标签名') //返回伪数组
>>document.getElementsByClassName('类名') //返回伪数组
>>document.querySelector(") //返回对象
>>document.querySelectorAll("选择器") //返回伪数组
>>document.body //获取body对象
>>document.documentElement //获取html对象
>>```
>
>事件：
>>三要素：1、事件源；2、事件类型；3、事件处理函数
>
>事件类型：
>>![img-013](./images/013.png)
>>onmouseenter // 进入盒子的时候执行一次
>>onmouseleave // 离开盒子的时候执行一次
>
>设置元素内容：
>>```
>>this.innerHTML
>>this.innerText
>>```
>
>设置元素属性：
>>元素对象.属性名 = 值

##### 属性的增删改查：
>查找属性：
>>H4：
>>>1：元素对象.属性名
>>>2：元素对象.getAttribute() //自定义属性只能通过该方法
>>
>>H5：
>>>3：元素对象.dataset.属性名 // ie11+
>>>4：元素对象.getAttribute('data-属性名')
>
>增改属性：
>>1：元素对象.属性名 = 属性值
>>2：元素对象.setAttribute(属性名, 属性值) //自定义属性只能通过该方法
>
>删除属性：
>>元素对象.removeAttribute(属性名)
>
>node.classList属性：DOMTokenList对象,记录着所有的class
>>add() :添加一个类名
>>remove():删除一个类名
>>contains() :判断是否包含某个类型
>>toggle():开关：如果当前拥有某个类型，则删除它，如果没有某个类名则添加
>
>node.dataset属性：DOMStringMap对象，记录着所有属性，可以对自定义属性增删改查
>
>HTMLConllection对象：是动态的，当伪数组发生变化的时候，集合的内容也会随之改变
>
>NodeList对象：是静态的，无论将来获取的元素发生怎样的改变，都不会影响集合的内容

##### 节点操作：
>元素节点：//nodeType：1 nodeName:"DIV"  nodeValue:null
>属性节点：//nodeType：2 nodeName:"id"  nodeValue:"d1"
>文本节点：//nodeType：3 nodeName:"#text"  nodeValue:文本内容
>注释节点：//nodeType：8 nodeName:"#comment"  nodeValue:注释内容

>查找：
>>node.parentNode //查找父节点
>>node.childNodes //返回所有子节点, NodeList对象
>>node.children //返回所有子元素节点，HTMLCollection对象
>>node.firstChild //返回第一个子节点
>>node.lastChild //返回最后一个子节点
>>node.firstElementChild //返回第一个元素子节点
>>node.lastElementChild //返回最后一个元素子节点
>>
>>node.nextSibling //下一个兄弟节点
>>node.previousSibling //上一个兄弟节点
>>node.nextElementSibling  //下一个兄弟元素节点
>>node.previousElementSibling //上一个兄弟元素节点
>
>增改：
>>document.createElement("节点名") //创建节点
>>父节点.appendChild(子节点) //添加节点，将节点添加到父节点下最后一个
>>父节点.insertBefore(要添加的节点，参照节点) //添加节点，将节点添加到参照节点前一个
>>node.cloneNode() //浅拷贝，返回复制的节点
>>node.cloneNode(true) //深拷贝，返回复制该节点以及下面所有节点
>
>删除：
>>父节点.removeChild(子节点) //删除并返回该节点

##### 创建元素的三种方法：
>1：document.write("") //需重绘，效率低
>2：node.innerHTML = "" //部分重绘，效率高
>3：创建节点 node.innerHTML = ""添加节点 //效率中，结构清晰
>
>网页加载的几个步骤： 
>>1、Dom树，加载css文件，结合DOM树和CSSOM树形成Render Tree(渲染树)
>>2、布局，就是把哪个盒子和标签该显示在哪个地方进行测量和计算。
>>3、绘制，将布局好的盒子绘制到浏览器的页面上。

##### 事件高级：
>注册事件：事件模型
>>node.onclick = function(){alert("");} //基本事件模型，唯一性
>>node.addEventListener("type",functiong)[, useCapture]}) //DOM事件模型，可多设，先注册先执行
>>node.attachEvent("on+type",functiong)) //IE事件模型，可多设，先注册后执行
>
>网景事件模型：XXX
>
>删除事件：
>>node.onclick = null //传统方法
>>node.removeEventListener(事件类型，事件处理函数) // 删除IE9+事件监听
>>node.detachEvent('on'+事件类型, 事件处理函数) //删除IE678事件监听
>
>DOM事件流：事件捕获和事件冒泡和W3C事件流
>
>事件对象：event
>>event // IE9+事件对象
>>window.event // IE678事件对象
>>![img-014](./images/014.png)
>>return false //传统方法和IE678，阻止默认行为
>>type = "selectstart" //阻止用户选中文本
>>type = "contextmenu" // 禁用右键菜单
>
>事件委托：
>>(把本该给某个元素绑定的事件，利用事件冒泡，给它的父元素绑定)
>
>>好处：
>>>1：减少元素绑定事件的次数，提高效率
>>>2：可以对未来增加的兄弟元素生效，不必单独为兄弟元素绑定事件
>
>鼠标事件：
>>![img-015](./images/015.png)
>>offsetX //鼠标相对于自身元素的水平距离（相对于自身元素的左上角）
>>offsetY //鼠标相对于自身元素的垂直距离
>
>拖拽效果：
>>position：位置设置为：盒子起始位置+拖拽差
>>transform：位置设置为：拖拽差
> 
>键盘事件：
>>keydown //键盘按下
>>keyup //键盘抬起
>>keypress //键盘按下（不识别功能键，比如shift、ctrl、Tab等）

##### BOM：
>窗口加载事件：
>>```
>>window.onload //第一种，加载全部
>>document.addEventListener("DOMContentLoaded", function() >{......}) //第二种，加载部分
>>```
>
>窗口大小事件：
>>```
>>window.onresize = function(){...} //窗口滚动执行
>>window.onscroll = function() {...} //鼠标滚动事件
>>window.open(url,方式,尺寸) //跳转到url网页，返回值是新的页面，无法>回退
>>window.colce() //关掉某个页面
>>```
>
>location对象：
>>![img-016](./images/016.png)
>
>location对象的方法：
>>![img-017](./images/017.png)
>
>userAgent对象： //用户代理，向服务端表明客户端的身份信息
>>navigator.userAgent //身份信息
>>navigator.appName //Netscape
>>navigator.appVersion //身份信息
>
>history对象：
>>![img-018](./images/018.png)
>
>screen对象：
>>screen.width //获得屏幕宽度
>>screen.height //获得屏幕高度

##### 定时器：
>```
>window.setTimeout(回调函数,[间隔的毫秒数],回调函数传参) //定时器，执行一次，返回值为1
>window.clearTimeout(ID)
>window.setInterval(回调函数,[间隔的毫秒数] ,回调函数传参) //定时器，一直执行，返回值为1
>window.clearInterval(ID)
>```

##### 同步异步：
>![img-019](./images/019.png)


##### 元素可视区 client 系列：
>(只读)

>```
>node.clientTop //上边框的宽度
>node.clientLeft //左边框的宽度
>node.clientWidth //内容区宽度+左右内边距
>node.clientHeight //内容区高度+上下内边距
>```

##### 元素偏移量offset系列：
>(只读)

>```
>node.offsetTop //盒子距离带有定位父元素的上边框的距离
>node.offsetLeft //盒子距离带有定位父元素的左边框的距离
>node.offsetWidth //包括内容区/左右内边距、边框
>node.offsetHeight //包括内容区/上下内边距、边框
>offsetParent //返回带有定位的父元素，没有返回body
>```

##### 元素滚动scroll系列：
>```
>scrollTop //返回被卷去的上侧距离，可读可写
>scrollLeft //返回被卷去的左侧距离，可读可写
>scrollWidth //返回自身实际宽度，不包含边框，可读
>scrollHeight //返回自身实际高度，不包含边框，可读
>```

##### 视口宽度：
>```
>window.innerWidth
>window.innerHeight
>document.documentElement.clientWidth
>document.documentElement.clientHeight
>```

##### 滚动条
>公式：
>>1：滑动块的高度=屏幕的高度/内容的高度*滑动槽的高度
>>2：内容的滚动距离=滚动条的滚动距离/(滑动块的高度/滑动槽的高度)
>
>滚动事件：
>>1：node.mousewheel //通过e.wheelDelta获得↑120/↓-120
>>2：node.DOMMouseScroll //通过e.detail获得↑-3/↓3，只能通过addEventListener注册

##### 兼容性：
>e = e || window.event //点击事件兼容性
>box.setCapture && box.setCapture() //设置拖拽兼容性

##### 闭包：
>作用：可以扩大局部变量的作用范围，让外部变量访问或修改，还可以自定义模块。
>
>闭包产生的条件是：
>>1：函数嵌套
>>2：内部函数引用外部函数的局部变量
>>3：外部函数被调用，内部函数也要被调用或者引用
>
>闭包的生命周期：
>>1：产生: 在嵌套内部函数定义完时就产生了(不是在调用)
>>2：死亡: 在嵌套的内部函数成为垃圾对象时 f = null
>
>缺点：
>>1：内存泄漏：内存无法释放；
>>2：内存溢出：内存被撑满；

##### 终极原型链：
>![img-020](./images/020.png)

##### 模拟多线程：
>Worker: 构造函数, 加载分线程执行的js文件this指向DedicatedWorkerGlobalScope对象
>Worker.prototype.onmessage: 用于接收另一个线程的回调函数
>Worker.prototype.postMessage: 向另一个线程发送消息

##### 深浅拷贝：
>1：浅拷贝：对象不相等，值相等
>2：深拷贝：对象不相等，里面值的地址也不相等

##### 公有、私有、静态、特权：
>公有属性和公有方法：设置给实例化对象的属性和方法
>私有属性和私有方法：声明在构造函数中的变量或函数
>静态属性和方法：构造函数的属性和方法
>特权方法：在构造函数里定义的方法

##### 轮询机制：
>浏览器先执行同步代码，在执行异步代码，在执行同步代码时，异步代码会被放到浏览器的管理模块进行管理。当异步代码需要执行时，会被回调函数放到任务队列里面排队执行，当同步代码执行完后，主线程会在任务队列中轮询，按顺序拿到回调函数执行

##### 节流、防抖：
>(都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。)

>节流：当高频的触发某个事件时，保证在n秒内执行一次
>防抖：在高频的触发某个事件后，保证在n秒内执行最后一次

**文档碎片节点：**
创建：var fragment = document.createDocumentFragment()

## jQuery+BootStrap+Less
#### jQuery：
>外层包裹：`$(function () {});`
>
>对象转换：jsjq：直接在外层添加一个$()  jqjs：中括号操作符给下>标/get方法
>
>获取节点：`$("选择器").`
>>`children()/parent()/siblings()/prev()/next()/prevAll()/nextAll()/find()/end()`
>
>动画：`$("选择器").animate({key:value }, 1000)/show()/hide()/fadeIn()/fadeOut()`
>
>样式：`$("选择器").css({key:value})`
>
>节点操作：
>>添加：`$("<li>li-1</li>").appendTo($("选择器"))`
>>删除：`$("选择器").remove()`
>
>事件委托：`$("父节点").on("click", "子节点", function () {$("this"). ...})`
>
>方法扩展：可以手动添加静态/共有方法：`$.方法名/$.fn.方法名 = function () {} `
>
>`$` 使用权：`var new$ = jQuery.noConflict()`

#### Less：
>[Less中文网](http://lesscss.cn/)
>
>使用：
>>基础使用：`<style type="text/less">`
>>全局less环境编译：安装less命令进行编译
>>vscode上安装easy less的插件
>
>注释：`"//"和"/* */", "/* */" 可以被编译到css中，浏览器也可以调试`
>
>变量：@变量名:变量值
>>属性值/url地址：@变量名
>>属性名/选择器：@{变量名}
>>延迟加载：等到当前区域执行完成才会加载变量
>
>嵌套：&符号代表父级引用
>
>运算：less可以直接进行加减乘除，单位从左往右找
>
>继承：`&:extend(继承class)`
>
>混合Mixin：
>>无参混合
>>有参混合
>>参数默认值	//也能用@arguments
>
>模式匹配：`.mine(@_/标记1/标记2)，@_：必选项`
>
>重载：根据参数来判断使用那个class
>
>守卫：`.类名(@变量名) when(@变量名判断) {...} //and-与，",(逗号)"-或`
>
>Less函数：去函数库找
>
>Less引入：
>>link：属于HTML，引入时加载，支持所有浏览器，可以被JS控制
>>@import：属于：CSS，最后加载，不支持IE，不能被JS控制
>
>字符串的插值和转义：
>>插值：变量和字符串拼接：@{变量名}字符串
>>转义：用`"~"进行转义，~"15px"=15px`

#### 工程化：   
##### Git：
初始化：
>`git init`：在当前文件夹中初始一个仓库.git文件
>`git init name`：创建一个叫name的文件夹，在里面初始.git文件

提交操作：
>`git status`：查看 工作区/暂存区/本地仓库的状态
>>红色：工作区与暂存区不同
>>>Untarcked(未跟踪)：这个是新文件(1.删除2.添加到暂存)
>>>>删除：rm 文件
>>>>添加到暂存：git add 文件
>>>
>>>modified：文件被修改
>>>deleted：文件被删除
>>
>>绿色：暂存区与仓库最新版本不同
>
>`git add ./文件`：提交 到暂存区，把工作区的修改	
>`git commit`：提交 到本地仓库，把暂存区的修改(会进入vim编辑器写注释)
>>`m` "提交的注释"
>>`am` "提交的注释" //直接把工作区提交到暂存区和本地仓库(新建文件操作不行)
>
>撤销操作：
>>`git restore ./文件`：撤销 工作区的改动(新建文件操作不行只能rm)
>>`git restore --staged ./文件`：撤销 缓冲区的修改到工作区
>
>删除操作：
>>`git rm 文件`：删除工作区和暂存区某个文件(提交到了本地仓库)
>>>`文件 -f`：强制删除暂存区
>>
>>`git rm --cached 文件`：删除暂存区的某个文件
>
>重名/移动操作：
>>`git mv 01.txt hello/02.txt`
>
>对比差异：
>`git diff`：查看工作区与缓冲区的差别，做了哪些修改
>`git diff -cached`：查看缓冲区与仓库的差异
>`git diff a b`：对比a和b的差异
>
>历史版本即回滚：
>>`git log`：详细版本信息
>>`git log --oneline`：简单版本信息
>>`git reflog`：显示历史所有版本
>>`git reset`
>>>`--hard`：工作区/暂存区/本地仓库都回滚
>>>`--mixed`：暂存区/本地仓库回滚
>>>`--soft`：本地仓库回滚
>
>忽略配置：
>>没有被本地仓库管理：把文件名放在.gitignore里
>>已被本地仓库管理：`git rm –cached` 文件保存本地仓库保存暂存区
>
>分支：
>>`git branch name`：创建分支
>>`git branch`：查看分支
>>`git checkout`：切换分支
>>`git checkout -b name`：创建并切换分支
>>`git branch -d name`：删除分支
>>`git merge 分支名`：合并分支
>
>远程仓库：
>>上传：
>>>1：`git remote add origin htmls/ssh` ：关联一个仓库
>>>>`git remote`：查看所有关联
>>>>`git remote rm origin`：删除关联
>>>
>>>2：`git push -u origin 分支名/--all`：向远程仓库上传该分支/所有分支
>>
>>下载：
>>>1：`git clone htmls/ssh`：从远程仓库下载，默认关联是origin
>>>2：`git pull htmls/ssh 分支名`：拉取某个分支的更新
>>>3：`git pull htmls/ssh 分支名:分支名`：拉取远程仓库某个分支到本地
>
>注释信息规范：
>>feat:新增
>>fix:修复bug 修改
>>docs:修改了文档
>>style:修改了代码风格
>>test：修改了测试用例

##### Linux常用命令：
>`ls/ls -al/ls -a -l`：查看当前文件夹下的文件/查看隐藏文件
>`cd/cd ..`：加入某个文件夹/返回上一级
>`clear`：清屏
>`mkdir`：创建文件夹
>`touch.文件.后缀`：创建文件
>`rm.文件.后缀/rm -r dir`：删除文件/删除文件夹
>`mv 原文件 目标文件`：移动文件
>`cat.文件.后缀`：查看文件内容
>`ctrl+c`：取消命令

##### Vim编辑器：
>1：`vim 文件.后缀`：编辑文件(没有则创建) //进入
>2：`点i/a/o` ：-->插入模式
>3：`按"ESC"键`：-->命令模式
>4：`按":"`：命令模式-->编辑模式
>5：`输入:wq`：退出

#### ES5：
##### 严格模式：
>分为内部和外部用：`'use strict'` 声明

>>不能使用未初始化的变量
>>禁止自定义的函数中的this指向window
>>禁止删除变量和对象中不可删除的属性，显示报错
>>禁止函数参数重名，对象属性重名

##### 异常处理：
>Error：普通异常 。与thorw语句和try/catch语句一起使用，属性name可以读写异常类型，message属性可以读写详细的错误信息。
>EvalError：不正确使用eval()方法时抛出
>SyntaxError：出现语法错误时抛出
>RangeError：数字超出合法范围之抛出
>ReferenceError：读取不存在的变量时抛出
>TypeError：值的类型发生错误的时候抛出
>URIError：URI编码和解码错误时抛出

##### Object静态方法：
>Object.create():
>>`Var obj = Object.create(参数1,[参数2]);`
>>参数1：新创建对象指定的__proto__属性(另一个对象/Object.prototype/null)
>>参数2：
>>>```
>>>{
>>>    key:{
>>>        value: value, //当前属性的值
>>>        writable: Boolean, //当前属性的值是否可以被修改
>>>        enumerable: Boolean, //当前属性是否可以被枚举出来
>>>        configurable: Boolean //当前属性/属性描述符是否可以被删除/修改
>>>    }
>>>}
>>>```
>
>Object.defineProperty()：
>>给一个对象扩展属性或方法，并且可以设置属性描述
>>参数1：被扩展属性的对象
>>参数2：属性名(string)
>>参数3：属性的描述(object类型)
>
>Object.defineProperties()：
>>给一个对象扩展一个或多个属性或方法，并且可以设置属性描述
>>参数1：被扩展属性的对象
>>参数2：属性及属性的描述（类似于create方法的第二个参数）

##### 存取器：
>(让对象里的属性变得动态)

>普通创建对象时定义：`get 新属性名(){...} , set 新属性名(value){...}`
>使用`Object.defineProperty(obj, "新属性名", {get (){...} , set (value){...}})`

##### 变量声明方式：
>1：var：只支持函数作用域(狗都不用)
>
>2：let：脱离window，属于Script
>>支持块作用域,可以层层嵌套,也有作用域链
>>在用一个作用域中不允许重复声明
>>是有声明提升的，只不过存在暂时性死区（在这个变量被赋值之前不能被使用s）
>>let在for循环小括号中有一个隐藏的作用域，属于for循环代码块的父作用域
>>块级作用域的出现， IIFE不再必要了
>
>3：const：用来声明常量，脱离window，属于Script
>>不能被改变
>>初始化的时候必须赋值
>>有变量提升，存在暂时性死区，在声明前不可以使用
>>块作用域
>>不能重复声明
>>如果声明对象只要对象地址不变，可以修改里面的值
>
>4：function：作用域不确定，官方明确规定可随意写，不同的浏览器得到不同的结果
>
>5：lable：给for声明一个变量保存
>>声明方法：变量名:for(){}
>>使用方法：只供break和continue使用

##### 模板字符串
>(增强版字符串)：\`...\`

>模板字符串里可以用`${...}`来接收字符串，里面可以是任何表达式

##### 进制转换：
>`toString(n进制)` //把十进制转为n进制
>`parseInt('m',n)` //把n进制的m转为10进制 ,其中m一定是一个字符串的格式

##### 三点运算符：
>`...数组/对象/字符串`，可展开数组/对象/字符串

##### rest参数：
>`...rest`，结构对象时，`...rest`回把其余的解构一起，组成一个新数组

##### 箭头函数：
>写法：
>>1：基础写法：`const fn11 = (a, b) => {}`
>>2：当参数只有一个时可省略()
>>3：当函数体只有一条语句时可省略{}
>>4：当函数体只有一条返回一句时可省略{}和return
>
>特点：
>>1：箭头声明的函数没有自己的this只能找父级的 
>>2：箭头函数不适用于构造函数
>>3：箭头函数也不适用于事件函数
>>4：箭头函数没有arguments,但是可以用rest参数
>>5：箭头函数不能使用yield命令(后面会讲)

#### ES6：
##### ES6提供的数据结构：
>Set数据结构：
>>它类似于数组去重
>>Set本身就是一个构造函数，所以用new Set(arr)声明实例化对象
>>Set可以接受具有iterable接口的其他数据结构作为参数
>
>>常用的方法和属性：
>>>`set.size` //返回Set的长度
>>>`set.add()` //在原数组的后面添加一个元素，返回原数组引用
>>>`set.delete()` //原数组上删除某一个值，返回一个布尔值
>>>`set.has()` //查看是否有该成员，返回布尔值
>>>`set.forEach()`    //遍历
>>>`set.clear()` //清除该结构里的内容
>
>Map数据结构
>>类似于对象，但是解决了对象key只能为字符串的问题
>>map是一个构造函数，里边传入一个二维数组
>>>```
>>>const map1 = new Map([
>>>    ["name", "laowang"],
>>>    [true, "boolean"],
>>>    [null, "null"],
>>>    [123, "数字"],
>>>    [{}, "123"],
>>>    [/\s/g, "正则"]
>>>]);
>>>```
>>
>>常用的方法和属性：
>>>`Map.size` //返回 Map 结构的成员总数
>>>`Map.set()` //在原数组上对属性进行增改
>>>`Map.get()` //查找，返回查找的值，如没有则返回undefined
>>>`Map.has()` //查看是否有该key，返回布尔值
>>>`Map.delete()` //删除原Map上某个key，返回布尔值
>>>`Map.forEach()` //对Map进行遍历，参数为为key和value
>>>`Map.clear()` //清除该结构里的内容
>
>数组、map、set等对象上都有这三个方法：
>>`Entries()` //分别用来获取键值对组成的迭代器对象
>>`Keys()` //所有的key组成的迭代器对象
>>`Values()` //所有的值组成的迭代器对象

##### ES6新增数据类型：
>BigInt类型：
>>计算时数后面都要加n
>>number值大于2的53次方则不精确，大于2的1024次方则返回Infinity
>
>Symbol类型：
>>用来做独一无二的值，主要用于给对象扩展独一无二的属性
>>Symbol的参数没有其他意义，只是一个标识,方便获取
>>Symbol类型转换不能转数字
>>`Object.getOwnPropertySymbols()`可以得到Symbol属性组成的数组
>
>术语：
>>nullish //当一个值是null或undefined
>>falsy //当一个值转成boolean类型的时候是false
>>truthy //当一个值转成boolean类型的时候是truthy
>
>选链操作符?. //存在则通过，不存在返回undefined
>>`const math = obj1?.score?.math;`
>
>空值合并操作符?? 
>>`-o = o ?? window等同于o === null || o === undefined&& o = window`
>
>Generator函数：
>>ES6提出的一种异步编程解决方案，内部封装了很多的状态，被称作状态机/生成器
>>function与函数名之间有一个*,函数体内部使用yield表达式
>>执行后会返回一个iterator，使用iterator来遍历出Generator内部的状态

##### Class：
>类的声明：`class 类名 {...}`
>>公有属性：有参数的需要在constructor函数里声明，无参的直接书写不需要变量声明
>>公有方法：`类里面 方法名(){...}` , 类外也可以扩展
>>静态属性：属性名前面加个static
>>静态方法：方法名前面加个static
>>特权方法：声明在constructor函数里

##### ES6继承：
>class 子类名 extends 要继承的父类名
>子类上没有this，如要使用构造器则需在前面添加super方法，并传参

##### ES6模块化：
>早期模块化：
>>Namespace模式：`var hxt = {方法}`
>>匿名闭包(IIFE)模式：`(function(){逻辑/方法})()`
>
>commonJS：//只能在nodejs环境中使用，如果要在ES中使用访问：[browserify](https://browserify.org/)
>>暴露模块：`exports.xxx = value/module.exports = value`
>>引入模块：`require(xxx)`
>
>ES6模块化规范：//浏览器不能直接使用，要先用babel转成commonJS在用browserify转成能识别的
>>默认暴露：//暴露一个对象：`{default:xxx}`
>>>暴露：`export default 方法名`
>>>引入：简写：`import 方法名 from 'url' 原版：import {default as xxx} from 'url'`
>>
>>分别暴露：//暴露一个对象：`{a,b}`，可和默认暴露连用，类似统一暴露的简写
>>>暴露：`export function 方法名() {} `
>>>引入：
>>>>1.`import {结构赋值} form 'url'` //别名：方法名 as 别名
>>>>2.`import * as obj from 'url'`
>>
>>统一暴露：//暴露一个对象：`{ add, o, say as say1 }`
>>>暴露：`export { add, o, say as say1 };`
>>>引入：
>>>>1：`import {结构赋值} from "url"`
>>>>2：`import * as obj from "./util";`
>>
>>引入暴露：//把所有的接口整合到一起，然后一起去暴露
>>>本来写法：`import { default as xxx } from "url"然后expect xxx`
>>>实际写法：`export { default as xxx} from "url"`

##### Promise:
>什么是Promise:
>>回调函数嵌套回调函数被称作回调地狱：难以维护，代码臃肿，可读性差，耦合度过高。
>>ES2015里Promise的标准化，是处理异步的，为了解决流程问题，让异步代码同步化
>
>Promise对象：
>>Promise是一个对象或构造函数，可以实例化使用
>>Promise上静态方法：all、allSettled、any、race、resolve、reject等
>>Promise的原型对象方法：then、catch、finally等
>
>Promise实例化时接收一个回调函数作为参数，这个回调函数接收两个参数
>>resolve函数：当异步代码成功后调用，函数的参数就是成功后要给promise实例的值
>>reject函数：当异步代码失败后调用，函数的参数就是失败后要给promise实例的失败信息
>
>promise实例有两个属性：
>>PromiseState：当前promise实例的状态
>>>pending：进行中，初始状态
>>>fulfilled/resolved :成功状态，只能pending转变而来
>>>rejected：失败状态，只能pending转变而来
>>PromiseResult：当前promise实例得到的结果
>>>调用resolve或者reject函数传递的参数
>
>then、catch、和finally的返回值：
>>then返回值：
>>>then默认返回成功状态的promise实例，值为该回调函数的返回值
>>>>then的回调函数报错时，则then返回失败的promise实例，值为错误信息
>>>>当then的回调函数返回的是promise实例时
>>>>>当return成功的Promise时，则then的返回值是成功的promise实例，值为内部return的promise实例的值
>>>>>当return失败的promise时，则then的返回值是失败的promise实例，值是内部return的promise实例的失败信息
>>
>>catch：
>>>和then的返回值规则保持一致
>>
>>finally：
>>>finally的回调函数不是返回promise实例时，则默认都是穿透
>>>finally的回调函数内出现报错，则返回失败的promise实例，值为错误信息
>>>finally的回调函数内返回成功的promise实例时，则还是穿透
>>>finally的回调函数内返回失败的promise实例时，则finally直接返回失败的promise实例，值为内部回调失败promise的值
>
>Promise.all():
>>(接受一个数组，数组中放入需要处理的promise实例)
>>
>>all接受的数组为空时，则返回成功的Promise实例，值为空数组
>>>all函数内报错，则返回失败的promise实例，值为错误信息
>>>all中全部是成功的promise实例，则all返回成功的promise实例，值为内部所有promise实例的值组成的数组
>>>all中有失败的promise实例，则all直接穿透第一个失败的promise实例
>
>Promise.allSettled():
>>(接受一个数组，监听多个promise实例，所有promise实例执行完，则返回一个结果)
>>
>>promise实例执行完毕时，allSettled永远返回成功状态
>>allSettled函数内报错，则返回失败的promise实例，值为错误信息
>>allSettled返回的promise实例的值是：所有监听promise实例对象组成的数组
>
>Promise.race():
>>(接受一个数组，监听多个promise实例，返回其中状态改变最快的promise实例和值)
>>
>>race接受的数组为空时，则返回是个进行时状态的promise实例，值为undefined
>>race函数内报错，则返回失败的promise实例，值为错误信 
>
>Promise.any():
>>(接受一个数组，监听多个promise实例，返回其中最快成功的promise实例和值)
>>
>>如果所有的promise实例全部失败或any接受的数组为空时，则返回一个新的错误类型：AggregateError: All promises were rejected，>primise
>>race函数内报错，则返回失败的promise实例，值为错误信  
>
>Promise.resolve():
>>(快速生成一个成功的promise对象，值为该函数的参数)
>>
>>resolve的参数是一个promise实例时，则resolve返回同样的状态和值
>        
>Promise.reject():
>>(快速生成一个失败的promise对象，值为该函数的参数)
>>
>>resolve的参数是一个promise实例时，则返回一个状态永远为失败，值为resolve参数的promise实例

##### async和await：  
>专门用来解决异步编程问题，是终极解决方案，用同步表达异步操作
>async是用来声明某个函数是异步函数,await是等待一个异步的执行
>
>await的使用：
>>await只能等待promise实例，其他的一概不等，但await语句后的所有都变成了异步
>>await等待到了成功的promise实例，则继续向后执行await语句，返回值成功的promise实例的值
>>await等待到了失败的promise实例，则直接退出当前async函数，不再执行函数的其他语句
>
>async函数的返回值：
>>默认返回成功的promise实例，值为async函数内部return的值
>>async中await等待到了失败的promise实例，则async直接返回失败的promise实例，值为内部失败promise实例的值
>>async函数内部报错，则async函数直接返回失败的promise实例，值为错误信息

##### import方法：
>import方法是用来做js模块按需引入的
>import()引入是异步的,返回成功的promise实例，值为Module

## nodeJS：
##### nodeJS事件轮询6个阶段介绍：
>timers阶段：用来处理setTimeout() 和 setInterval() 等回调函数。
>pending callbacks阶段：用来处理系统操作的回调函数
>idle prepare阶段: 仅供nodejs内部操作调用
>poll阶段：
>>主要用来处理如IO操作，网络请求等异步操作
>>当这个阶段非空的时候，则执行完这个阶段，进入下一个阶段
>>当这个阶段为空的时候，除非check或timers阶段有回调函数等待执行，否则会一直在poll阶段等待回调函数执行
>
>check阶段：专用来处理setImmediate回调函数的
>close callbacks阶段：处理如socket的close事件等关闭的回调函数的

##### 微任务和宏任务：
>代码先执行微任务在执行宏任务
>宏任务由宿主发起，如script、setTimeout、setInterval等
>微任务由自身发起，如promise.then/catch/finally、prcess.nextTick等
>每执行完一段宏任务时，都会检查是否有微任务，有，则执行微任务。无，则执行下一段宏任务

##### nodejs模块：
`function (exports, require, module, __filename, __dirname) {}`
>exports:一个对象，包含了所有暴露的内容
>require:一个方法，引入其他模块并执行，返回当前模块内部暴露的对象，是同步的
>>核心模块：'fs'
>>第三方模块：jquery等
>>自定义模块：书写相对路径。可省略后缀
>
>module:关于当前模块详细的信息
>__filename:当前的文件绝对路径
>__dirname:当前文件所在文件夹的绝对路径

##### NPM(包管理器)：
>(通过NPM可以对node的包进行搜索、下载、安装、删除、上传)
>
>`npm -v`：查看npm的版本
>`npm init -y`：初始化一个默认配置package.json
>`npm i 包名/npm i 包名 --save/npm i 包名 -S`：下载一个生产环境的包
>`npm i 包名 --save-dev/npm i 包名 -D`：下载一个开发环境的包
>`npm i`：下载当前项目所有依赖的包(基于package.json文件)
>`npm I 包名@版本`：指定版本的包下载
>`npm r 包名`：卸载指定版本的包
>`npm i 工具名 -g`：全局安装某个工具
>
>CNPM：淘宝 NPM 镜像
>>直接安装：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
>>修改npm仓库地址：`npm config set registry https://registry.npm.taobao.org/`

##### npm包的发布与删除：
>发布npm包：
>>1：注册npm账号 //需要用户名、密码、邮箱(注册简单)
>>2：在文件根目录命令行输入`npm config set registry https://registry.npmjs.org/`   //把下包的服务器地址切换为npm的官方服务器，否则npm login会失败
>>3：在文件根目录命令行输入`npm login` //终端登录npm账号，一次输入用户名、密码、邮箱后，即可登录成功
>>4：编写需要的包，并暴露(export default/module.exports)
>>5：创建package.json //在文件根目录命令行输入`npm init` ，配置如下
>>```
>>{
>>  "name": "binary-conversion", 
>>  "version": "1.0.0", 
>>  "description": "change(x,y,z) //把x进制的y转为z进制并返回出来",
>>  "main": "binary-conversion.js",
>>  "scripts": {
>>   "test": "echo \"Error: no test specified\" && exit 1"
>>  },
>>  "keywords": [
>>  	"['binary'",
>>  "'transformation'",
>>  	"'base",
>>  	"system']"
>>  ],
>>  "author": "huxitai",
>>  "license": "ISC"
>>}
>>```
>>
>>6：在文件根目录命令行输入`npm publish` //将包发布到npm上，在npm上搜索即可搜索到
>
>删除npm包：在文件根目录命令行输入`npm unpublish 包名 --force`
>>`npm unpublish` 命令只能删除72小时以内发布的包
>>`npm unpublish` 删除的包，在24小时内不允许重复发布
>>发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包！

##### Yarn:
>`npm i yarn -g`：安装 yarn 工具
>`yarn -v`：查看 yarn 的版本
>`yarn init`：初始化一个 package.json
>`yarn init -y`：初始化一个 package.json，默认添加默认信息
>`yarn add 包名`：下载某个生产环境的包
>`yarn add 包名@版本`：下载某个生产环境的某个版本的包
>`yarn add 包名 -D`：下载某个开发环境的包
>`yarn remove 包名`：删除某个包
>`yarn global add 包名`：全局安装某个包
>
>CYang：
>>`yarn config set registry https://registry.npm.taobao.org/`：修改 yarn 仓库地址为淘宝镜像
>>`npm install cyarn -g --registry https://registry.npm.taobao.org`：安装 cyarn

##### nodeJS核心模块：
>Buffer：
>>`Buffer.alloc(size[, fill[, encoding]])`：返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
>>`Buffer.allocUnsafe(size)`： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
>>`Buffer.from(string[, encoding])`： 返回一个被 string 的值初始化的新的 Buffer 实例
>
>Process：
>>`process.argv 属性`：返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
>>>node.exe的绝对路径
>>>被启动文件的绝对路径
>>>自定义的启动命令
>>
>>`process.argv0属性`：等于argv[0]，也就是获取nodejs程序目录
>>`process.cwd()方法`：返回 Node.js 进程的当前工作目录的绝对路径
>>`process.exit([code])方法`：退出进程
>
>Path：
>>path.resolve([...paths]) 方法将路径或路径片段的序列解析为绝对路径
>
>Crypto：提供了加密功能(md5 sha1 sha256 sha512)
>>`crypto.createHash("md5").update(pass, "utf8").digest("hex")`
>
>Events(事件触发器)：是一个构造函数需要实例化一个对象
>>设置事件 
>>>1：`实例.on(事件名,回调函数)`添加一个监听器，可被触发多次
>>>2：`实例.addListener(事件名,回调函数)`和上面一样，别名而已
>>>3：`实例.once(事件名,回调函数)`添加一个监听器，只能触发一次。
>>
>>事件触发：`实例.emit("事件名")`
>
>Fs(文件系统)：对计算机中的文件进行增删改查等操作
>>同步文件写操作
>>>打开：`fs.openSync(path[, flags, mode])`//返回一个标识ID
>>>>flags：'a'//无则创建后写，'w'//无则创建覆盖，'r'//无则报错
>>>写入：`fs.writeSync(fd, "内容")`
>>>关闭：`fs.closeSync(标识ID)`
>
>>异步文件写操作
>>>打开：`fs.open(path, flags[, mode], (err,fd)=>{})`
>>>写入：`fs.write(fd, 内容, (err)=>{})`
>>>关闭：`fs.close(fd, (err)=>{})`
>>>简单写入：`fs.writeFile(path, "内容", { flag: "a" }, (err)=>{})`
>
>>流式写入：
>>>创建流：`ws = fs.createWriteStream(Path, { flags: "a" })`
>>>依次写入：`ws.write("内容")`
>>>关闭流：`ws.end()` //关闭开头(常用)， ws.close() //关闭末尾
>
>>简单读取：`fs.readFile(Path, (err, data) => {})`
>    
>>流式读取：
>>>创建流：`rs = fs.createReadStream(Path)`
>>>读取：`rs.on("data", (chunk) =>{})`
>
>>边读编写：
>>>创建可读流和可写流
>>>边读编写：`rs.pipe(ws)`
>>>关闭可写流
>
>>promisify工具：
>>>```
>>>{ promisify } = require("util") //引入
>>>open = promisify(fs.open) //async外
>>>fd = await open(filePath, "a") // async里
>>>```
>>>把异步方法包装成返回promise对象
>
>事件：
>>open：打开文件时触发
>>>close：关闭文件时触发
>>>data：读取到数据时触发
>>>end：读取数据完后触发

##### HTTP服务器：
>创建：
>>1：引入http
>>
>>2：创建服务器：`server = http.createServer((request, response) => {})`
>>>`response.setHeader("Content-type", "text/plain;charset=utf-8")`：声明响应时数据格式
>>>`response.end(``)`：响应内容给客户端
>>
>>3：启用服务器：`server.listen(端口号, "IP地址", (err) => {})`
>>
>>4：搭建node客户端：`client = http.request("url", (response) => {})`
>>>在http作为客户端时，response是一个可读流
>
>请求报文：
>>```
>>POST http://192.168.17.38:888/ HTTP/1.1 #请求方式+url地址+协议+版本号
>>Host: 192.168.17.38:888 #主机地址
>>Connection: keep-alive #保持TCP长连接
>>Content-Length: 30 #报文体的长度
>>Cache-Control: max-age=0 #是否强制缓存及缓存时间
>>Upgrade-Insecure-Requests: 1 #是否支持https
>>Origin: http://127.0.0.1:5500 
>>Content-Type: application/x-www-form-urlencoded
>>User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 >Safari/537.36 #用户代理字符串（当前浏览器识别码）
>>Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,>application/signed-exchange;v=b3;q=0.9 #可以接收的数据格式
>>Referer: http://127.0.0.1:5500/
>>Accept-Encoding: gzip, deflate #可以接收的压缩格式
>>Accept-Language: zh-CN,zh;q=0.9 #可以接收的语言
>>
>>user=2449258269&pass=hxt770880
>>```
>
>响应报文：
>>```
>>HTTP/1.1 200 OK #协议+状态码+状态码原因短语
>>Content-type: text/plain;charset=utf-8 #响应的数据格式
>>Date: Tue, 07 Dec 2021 12:24:31 GMT #响应的时间
>>Connection: keep-alive #保持长连接
>>Keep-Alive: timeout=5 #长连接过期时间是5ms
>>Content-Length: 46 #报文体的长度
>>
>>hello我是胡熙泰 你是第5个访问我的
>>```
>
>MIME类型：
>>```
>>text/plain //文本类型
>>text/css //css类型
>>text/html //html类型
>>        
>>application/javascript //js类型
>>application/json //json类型
>>application/x-www-form-urlendcoded //form 表单类型
>>
>>image/jpg //jpg图片
>>image/png //png图片
>>image/gif //gif图片
>>image/webp //webp图片
>>
>>video/mp4 //mp4视频
>>audio/mp3 //mp3音频
>>```

##### 状态码:
>1XX:请求正在处理中
>
>2XX:请求成功 
>>200：请求成功
>>201：请求成功，服务端创建了新的资源，常见POST和PUT请求
>>204：请求成功，服务端不需要向客户端返回报文实体
>
>3XX:重定向
>>301：永久重定向
>>302：临时重定向
>>304：服务端要求客户端读取缓存
>
>4XX:客户端错误
>>400：客户端请求报文出现语法错误
>>401：客户端没有权限，需要http认证
>>403：服务端拒绝客户端的访问
>>404：服务端未找到对应资源
>
>5XX:服务端错误
>>500：服务端出现错误
>>503：服务端超负荷或者停机中

##### TCP握手：
>TCP三次握手：
>(意义在于客户端和服务器之间能相互确认对方的接收和发送能力)
>
>>第一次握手：客户端向服务器发送一个SYN包(示意连接)，进入SYN_SEND状态，等待响应
>>第二次握手：服务器收到SYN包后给客户端发送一个ACK包(好的)和SYN包(示意连接)，进入SYN_SEND状态 //确认客户端发送能力正常
>>第三次握手：客户端收到SYN包和ACK包后给服务器发送一个ACK包(好的)，进入ESTABLISHED状态 //确认服务器收发能力正常，服务器收到ACK包后确认客户端接收能力正常
>
>TCP四次挥手：
>(意义在于客户端和服务器双方统一示意断开连接并作出应答，则断开连接。服务器在同意断开时，会发送两次断开响应，因为服务器示意断开时还有一些业务没有处理，等处理完后才确认断开)
>
>>第一次挥手：主动关闭方会发送一个FIN包(示意关闭)
>>第二次挥手：被动关闭方收到FIN包后给主动关闭方发送一个ACK包(示意关闭)
>>第三次挥手：等被动方业务逻辑处理完后给主动关闭方发送一个FIN包(确认关闭)
>>第四次挥手：主动关闭方收到FIN包后给被动关闭方发送一个ACK包(好的)

##### 浏览器渲染流程：
>1.根据html节点生成DOM tree
>2.根据样式生成CSSOM tree，并把样式转化为标准样式
>3.结合DOM树和样式树生成渲染树(render Tree)
>4.分层，根据样式对我们要绘制的页面分层
>5.根据分层结果给浏览器生成每一个图层的绘制指令
>6.把分一个图层进行栅格化
>7.绘制并显示在浏览器中

##### 从输入url到页面展示过程：
>1：DNS解析：域名到IP地址的转换过程
>2：和服务器建立联系，TCP三次握手
>3：向服务器发送请求
>4：接收服务器的响应
>5：把接受的页面渲染在浏览器中
>6：断开连接，TCP四次挥手

## 数据库：
##### MongoDB：
>可视化工具搭建数据库：
>>1：下载mongodb安装包，并配置环境变量
>>2：下载NoSQLBooster for MongoDB可视化工具
>>3：Connect-->Create-->Save&Connect-->Run
>>4：数据库的增删改查：
>>>show databases：查看所有数据库
>>>use 库名：进入某个数据库或添加某个数据库
>>>db：查看当前所在数据库
>
>增：
>>`db.集合名.insert({文档})`：向所在数据库的某个集合新增一条文档
>>`db.集合名.insert([{文档1},{文档2},{文档3}])`：向数据库的某个集合新增一条或多条文档数据
>
>查：
>>`db.集合名.find()`：查找集合中所有文档
>>`db.集合名.find({key：value})`：查找当前集合筛选条件中符合的所有文档
>>`db.集合名.find({key1：value1,key2：value2})`：查找当前集合中符合所有筛选条件的所有文档
>>`db.集合名.find({$or：[{key1：value1},{key2：value2}]})`：查找当前集合中符合 key1：value1 或 key2：value2 的所有文档
>>`db.集合名.find({key：{$gt/$lt/$gte/$lte：value}})`：查找当前集合中大于/小于/大于等于/小于等于 value 的文档
>>`db.集合名.find({key：{$in：[value1,value2]}})`：查找当前集合中 key：value1 或 value2 的所有文档
>>`db.集合名.find({key：正则})`：查找当前集合中 key 符合正则的所有信息
>>`db.集合名.find({ $where：function(){} })`：遍历当前集合中所有文档，this 为文档,return 为 true 则返回符合的文档
>>`db.集合名.find({key：value},{key：1/0})`：第二个参数：筛选结果展示的时候key：1/0为该字段展示/不展示，_id默认展示
>>`db.集合名.findOne()`：查找符合条件的第一个文档
>
>改：
>>`db.集合名.updateMany({查找},{$set：{key：value}})`：查找到符合条件的所有文档，并修改其文档key的value
>>`db.集合名.updateMany({查找},{$inc：{age：1}})`：查找到符合条件的所有文档，并修改其文档key的value+1
>>`db.集合名.updateOne()`：同上但只修改查找到的第一个文档
>
>删：
>>`db.集合名.deleteMany({筛选条件})`：删除所有符合筛选条件的信息
>>`db.集合名.deleteOne({筛选条件})`：删除第一个符合筛选条件的信息

##### nodejs搭建数据库：
>1：连接数据库：`mongoose.connect("mongodb://host/库名", (err) => {})`
>
>2：创建schema集合约束对象：`studentSchema = new mongoose.Schema({key: {...}})`
>>type: 数据类型 //value数据类型
>>unique: true/false //value是否唯一的
>>required: true/false //是否必填
>>default:内容 //默认值
>
>3：创建集合：`studentModel = mongoose.model("集合名", 约束对象);`
>
>4：数据库的增删改查：
>>增：`集合名. create({})` //语法同可视化工具搭建，返回promise
>>查：`集合名. find/One({})` //语法同可视化工具搭建，返回promise
>>改：`集合名. updateMany/One` //语法同可视化工具搭建，返回promise
>>删：`集合名. deleteMany/One` //语法同可视化工具搭建，返回promise

##### MySql：
>搭建mysql服务：
>>1：访问[Mysql官网][Mysql]下载mysql
>>2：然后选择 MySQL Community Server 社区版，该版本为免费授权
>>3：选择对应系统的非debug版本下载，我们这里使用的是windows操作系统
>>4：点击No thanks, just start my download.开始下载
>
>初始化mysql服务：
>>1：找到解压后的文件夹的/bin目录，以管理员身份打开cmd运行 `.\mysqld.exe --initialize`
>>2：继续输入`mysqld --install` 该命令会将mysql安装进系统服务
>>3：`net start mysql` -启用mysql，`net stop mysql` -停止mysql
>
>使用Navicat连接数据库：
>>1：下载Navicat
>>2：点击连接->数据基本信息->数据data/*.err里面的密码
>>3：手动建一个数据库 字符集为utf8mb4 字符集排序为utf8mb4_general_ci
>
>使用TypeOrm关联数据库：
>>1：`npm i typeorm mysql2` //安装typeorm和mysql2
>>2：使用DataSource建立连接
>>3：创建实体文件，需要开启experimentalDecorators和emitDecoratorMetadata并下载`npm install reflect-metadata --save`
>>4：index.ts中添加`import "reflect-metadata"`
>
>装饰器:
>>@Entity() //确定一个类为实体
>>@PrimaryGeneratedColumn() //确定一个属性为主键
>>@Column() //确定一个普通属性
>>@ManyToOne() //确定多对一的关系
>>@JoinColumn() //定义关系的时候会创建对应的id
>
>数据库的增删改查：
>`const userRepositoty = connection.getRepository(实体)`
>
>增：
>>`await userRepository.save(实例对象)`
>
>删:
>>`await userRepository.remove(实例对象)`
>
>改: 重新赋值
>
>查:
>>查找多个:
>>>```
>>>await userRepository.find() //查看当前实体表的所有类容
>>>await userRepository.find(relations:{'user'}) //查看当前实体表的所有类容，以及被关系属性user
>>>await userRepository.find({a:MoreThanOrEqual(5000)}) //查看a属性大于5000实体表的所有类容
>>>await userRepository.find({a:MoreThanOrEqual(5000),name:xiaohong}) //查看a属性大于5000且name为xiaohong实体表的所有类容
>>>await userRepository.find({where:[{a:MoreThanOrEqual(5000)},{name:xiaohong}]}) //查看a属性大于5000或name为xiaohong实体表的所有类容
>>>await userRepository.find({name:Like('小%')}) //查看所有name以小开头的类容，%表示任意
>>>await userRepository.find({name:Like('%小%')}) //查看所有name以包含小的类容，%表示任意
>>>await userRepository.find({skip:0,take:2}) //分页-查看第一页的两条数据
>>>     skip:0 //跳过多少条
>>>     take:2 //显示多少条
>>>
>>>await userRepository.find({order:{a:'DESC'}}) //排序-获取以a属性排序后的类容
>>>await userRepository.find({order:{a:'DESC',b:'ASC'}}) //排序-当a属性相同时以b属性的升序进行排序
>>>     DESC //倒序
>>>     ASC //升序
>>>```
>
>>查找一个:
>>>```
>>>await userRepository.findOne(3) //查找ID为3一条实例，不存在时返回undefind
>>>await userRepository.findOne({name:xiaohong}) //查找到第一条name为xiaohong的实例
>>>```
>
>定义关系:
>>确定多对一的关系(单向):
>>>@ManyToOne(type=>User) 
>>>@JoinColumn() //会在评论表里面创建一个userId属性，会把这个评论属于哪个用户进行关 联
>>>>user: User
>>
>>确定一对多的关系(反向):
>>>@OneToMany(type=>Comments, comments=>comments.user) 
>>>@JoinColumn() //会在评论表里面创建一个userId属性，会把这个评论属于哪个用户进行关 联
>>>>comments: Comments[]
>>
>>确定多对多的关系:
>>>@ManyToMany(()=>Category)
>>>@JoinTable()
>>>>categories: Category[];

##### express快速搭建服务器和端口：
>1：引入express包：`express = require("express")`
>2：调用express包：`add = express()`
>3：发送get请求：`add.get("接口", (req, res) => {...});`
>>手动设置content-type
>>`res.send()`：text/plain
>>`res.json()`：application/json
>>`res.sendFile(Path)`：响应一个文件
>>`res.download(Path)`：响应一个下载
>>`redirect("url")`：重定向
>>`res.set("hello", "world").status(200)`：自定义setHeader和状态码
>>`req.query`：得到一个对象，包含的是查询字符串的内容
>>启用服务：`add.listen(端口号, (err) => {});`

##### params参数：
>app.get("/:XX", (req, res) => { req.params }) //得到一个对象 {XX:params的值}

##### 中间键：
>处理form表单报文：`app.use("限制",express.urlencoded({extended:false}))`
>处理json格式报文：`app.use("限制", express.json())`
>把静态文件暴露出去：`app.use(['/public'], express.static(path.resolve(__dirname, "文件")))`

## AJAX：
##### 原生AJAX请求：
>1：实例化XMLHttpRequest：xhr = new XMLHttpRequest()
>
>2：打开路径：xhr.open(参数一,参数二,参数三)
>>参数一：请求方式
>><font color="red">参数二：接口地址 //GET发送的数据写在上面，防读缓存&_=${Date.now()</font>
>><font color="purple">参数二：接口地址</font>
>>参数三：是否异步
>    
><font color="red">3：发送请求，xhr.send()</font>
><font color="purple">3：发送请求，xhr.send() // POST发送的数据写在参数中，此时有两种写法：</font>
>><font color="purple">xhr.setRequestHeader() //要声明content-type</font>
>><font color="purple">form表单格式</font>
>><font color="purple">json字符串格式</font>
>
>4：监听请求：xhr.onreadystatechange = function () {...} //请求监听事件
>>-xhr.status:状态码
>>-xhr.readystate:请求状态码
>>>0:正在准备
>>>1:open方法已经调用
>>>2:send方法已经调用
>>>3:正在请求数据
>>>4:数据已经拿到
>>
>>-xhr.responseText:接收服务端文本格式的响应
>>-xhr.responseXML:接收服务端xml格式的响应
>
>5：阻止默认行为：return false

##### jQuery的AJAX请求：
>AJAX一级封装：$.ajax({配置}) //里面写配置信息
>>type: "" //请求方式
>>url: "" //请求地址
>>cache: false //控制是否读取缓存
>>data: {...} //我们向服务端发送的数据，post和get都可以写里面
>>dataType: "json" //我们期望请求的结果类型
>>headers: "" //设置请求头
>>success(data) {...} //请求成功的回调函数，参数服务器响应的数据
>
>AJAX二级封装：`$.get/post(url,[data],[fn],[type])` //直接进行get/post请求
>AJAX三级封装：`$.getJSON(url, [data], [callback])`

##### axios的AJAX请求：
>基础方法：axios({配置}) //里面写配置信息
>>url: "" //请求地址
>>method: "" //请求方式，默认get
>>headers: {} //设置请求头
>><font color="red">params: {} //我们向服务端发送的数据，get写里面</font>
>><font color="purple">data: {} //我们向服务端发送的数据，post写里面</font>
>
>axios请求返回promise对象：
>>State：//请求失败：rejected，请求成功：pending，得到响应：fulfilled
>>Result：为一个对象其属性有：
>>>config:axios请求时的配置信息
>>>data:服务端响应的数据
>>>headers:响应头
>>>request:axios底层使用的xhr对象
>>>status:响应状态码
>>>statusText:响应的状态短语
>
>别名方法：
>>axios.get(url[,config])
>>axios.post(url[,data,[config]])
>
>axios全局配置：axios.defaults.baseURL = "url" //把所有请求的基础路径设置为url
>
>axios新实例：axios.create([config]) //可配置

##### 传递数据的方式：
>1：params：只能写在url上
>2：query：可以写在url上或params中
>3：body请求体：只能写在data中

##### 接口文档：
>method:
>url:
>请求参数:
>响应:

##### 拦截器：
>(修改请求头(报文)，添加功能)
>
>请求拦截器：`axios.interceptors.request.use((config)=>{return config},(err)=>{})` //config为其配置信息
>
>响应拦截器：`axios.interceptors.response.use((res) => {},(err)=>{})` //res为原本promise的值
>>axios.post()默认返回一个成功的promise实例，值为return的值
>>如果return一个失败的promise，则返回一个失败的promise，值为其参数
>
>取消axios请求：`cancelToken: new axios.CancelToken((c) => {})`
>>调用c即可取消命令，返回一个失败的promise实例，值为c的参数

##### 跨域请求：
>JSONP：所有ajax请求都有跨域的限制，但用script标签请求没有
>>新建script标签
>>给script标签添加src属性，内容写在url上，外加一个回调函数，script是get请求
>>把标签插入到body中
>>服务器收到请求后需要设置一个响应头，然后响应一个函数的调用，里面可以传参
>
>jQuery的jsonp：`$.getJSON("url&callback=?", (data) => {})`
>
>CORS跨域：//在服务端响应请求的响应头上设置该令牌 
>>`res.header('Access-Control-Allow-Origin', 'http://localhost:5500')` //允许跨域的地址
>>`res.header('Access-Control-Allow-Credentials', 'true')` //允许携带凭证(也就是cookie)
>>`res.set("Access-Control-Allow-Headers", "Content-Type")` //允许跨域的请求头
>
>Proxy(代理)配置跨域：//把客户端与本地服务器连接，在通过本地服务器给服务器发送请求
>>配置位置：`XXX.config.js的module.exports = {devServer: {配置} } `
>>方法一：`proxy: '服务器地址'` //只能配置一个，客户端请求本地地址
>>方法二：`proxy: {'/api1': {target: '服务器地址',changeOrigin: true,pathRewrite: {'^/api1': ''}}}` //可配置多个，客户端请求时需加一个/api1

##### 路由器：
>在分模块中不能重新创建express()，要和主模块用同一个express()
>
>`router = express.Router()` //在分模块引入，把router暴露给主模块router同app
>`app.use(router)` //在主模块引入router在把router挂载在app上

##### 存储：
>cookie：//解决http无状态，储存4kb文本，可以权限验证，会随着HTTP一起发送
>>引入第三方中间件：`const cookieParser = require('cookie-parser')`
>>挂载在app上：`app.use(cookieParser())`
>>设置cookie：`res.cookie("key", "value", {})` //cookie为一个对象{key:value}
>>>expires:时间 //设置过期时间(http1.0)，后边跟一个时间对象，到特定时间后过期
>>>maxAge:时间 //设置过期时间(http1.0)，后边跟一个时间毫秒，过特点时间后过期
>>>httpOnly: true //仅仅服务端可以操作
>>
>>查看cookie：`req.cookies.key`
>
>localStorage：//本地永久存储，一直有，一般支持5-10M
>>设置：`localStorage.setItem("key", "value")` //返回一个{key 'value', length: n}
>>获得：`localStorage.getItem("key")`
>>删除：`localStorage.removeItem("key")` //删除某一个localStorage  
>>>`localStorage.clear()` //清空所有的localStorage
>
>sessionStorage：//本地会话存储，关闭网页就没了，一般支持5-10M
>>设置，获取，删除同上
>
>Session：和cookie配合使用存储在数据库，相对安全
>>引入`session：const session = require('express-session')`
>>引入mongo：`const MongoStore = require('connect-mongo');`
>>session中间件的配置：
>>>`app.use(session({secret: 'lipeihua',store: MongoStore.create`
>>>`({mongoUrl: 'mongodb://127.0.0.1:27017/goat0722',})}));`
>>
>>设置session：`req.session.key = 用户信息`
>>获取session：`req.session.key`

##### 缓存机制：
>强制缓存：`headers: {"Cache-Control":"max-age=3"} `
>>在客户端请求和服务端响应的响应头中都要设置
>
>协商缓存：自己查，搜索协商缓存查看文档

##### zlib压缩：
>引入fa和zlib包
>对响应的文件创建可读流：`rs = fs.createReadStream(filePath)`
>读取流写到压缩容器中：`gzipFile = rs.pipe(zlib.createGzip()/Deflate())`
>设置响应头为压缩格式：`res.set("content-encoding", "gzip/deflate")`
>压缩好的文件写到响应中：`return gzipFile.pipe(res)`

## React:
##### React对象静态方法：
>`React.createElement(参数1, 参数2, 参数3,参数n)`
>>参数1：标签名
>>参数2：是一个对象，内部保存的是当前标签的属性
>>参数3：是这个标签的内容 或者 额外的虚拟DOM
>>参数n：参数3的兄弟节点
>
>`React.Component类`
>
>`React.createRef()` //创建一个'容器'，ref={this. '容器' }，this.inputEle.current里存放元素

##### ReactDOM对象静态方法：
>`ReactDOM.unmountComponentAtNode(元素)` //卸载当前元素及里面的元素

##### 组件实例的属性和方法：
>`this.state:{}` //组件的状态，用来存放组件的数据，值默认是null，是私有只读的
>
>`this.props: {}` //值默认是空对象，只读，存放通过标签传入进去的数据
>>`.children` //双标签的内容
>
>`this.refs: {key,value}` //保存元素的，key为元素上ref的值，value为元素
>>String类型的refs：
>>回调函数形式的ref：
>>createRef的使用：

##### 组件的静态方法：
>`static propTypes = { key:PropTypes.数据类型[.isRequired] }` //限制props的类型以及必要性
>`static defaultProps = {key:value}` //给props指定默认值

##### 生命周期函数(钩子函数)
>```
>constructor() {} //构造器
>UNSAFE_componentWillMount() {} //组件即将挂载
>render() {} //组件渲染
>componentDidMount() {} //组件挂载完毕
>UNSAFE_componentWillReceiveProps() {} //即将接受父组件的传值
>shouldComponentUndate() {} //一个阀门，返回值为ture时调用render()
>UNSAFE_componentWillUndate() {} //组件即将更新
>componentDidUpdate() {} //组件已经更新
>componentWillUnmount() {} //组件即将卸载
>```

`static getDerivedStateFromProps(props, state)` //state 的值在任何时候都取决于 props

`getSnapshotBeforeUpdate(){}` //快照：在render方法执行后，但是真正DOM渲染前执行

##### React路由：
>1：`react-router-dom@5` //下载插件库
>2：`import { BrowserRouter, Link, Route, Redirect } from "react-router-dom"` //引入组件
>3：`<BrowserRouter><App /></BrowserRouter>` //把所有路由接到路由器上
>4：`<Link to="接口"></Link>` //产生一个a标签
>5：`<Route path="接口" component={组件名} />` //location与Route的path匹配时呈现UI
>>`exact={true}`//严格匹配，无法二级路由

##### 路由其他组件和方法：
>`<Redirect to="接口" />` //重定向
>`<NavLink to="接口" activeClassName="" activeStyle={{}} ></NavLink>`
>`<Switch></Switch>` //里面放Route，相同路径的组件，只能加载一次
>`withRouter(组件名)` //把一般组件变成路由组件，一般在暴露时使用

##### 路由传参：
>1：params传值方式：
>>在Link的to属性后 用url地址的格式依次传递数据
>>在Route组件中 书写path属性中，使用/:xxx的形式 用xxx接受对应的params参数
>>在路由组件中 通过this.props.match.params拿到传递进来的数据
>
>2：查询字符串的形式传值方式：
>>在Link的to属性后 用查询字符串的方式进行传递数据
>>在Route组件中 正常书写path
>>在路由组件中 通过this.props.macth.params拿到传递进来的数据
>
>3：查询字符串的形式传值方式：
>>在Link的to属性可以是一个对象。配置state传参方式
>>在路由组件中使用 this.props.location.state拿到传递的数据

##### 编程式路由导航：
>使用路由组件的this.props.history.push或者replace方式进行页面导航

##### 历史纪录：
>`this.props.history`

>`.goForward()` //前进
>`.goBack()` //后退
>`.go(±n)` //前进或后退n步

##### Redux：
>阉割版：
>>配置store：
>>>1：`import {createStore, combineReducers} from 'redux'`
>>>2：`引入reducer模块`
>>>3：`const allReducer = combineReducers({name:reducer模块, name: reducer模块 })`
>>>4：`const store = createStore(allReducer,中间件);`
>>>5：`暴露store`
>
>>配置reducer //每个不同类型的动作都会配置自己的reducer
>>>1：`fnName=(preState=0,action)=>{}` // return的值就会给store
>>>>preState：上一次的值
>>>>action：动作
>>>
>>>2：`暴露reducer`
>
>完整版：//在阉割版的基础上多了一个action
>>1：`export const action1 = value => ({type: INCREMENT, data: value})` //返回一个动作
>>2：`import {action1, action2 } from 'url'` //引入action
>>3：`store.dispatch(createIncrementAction(+value))` //使用action

##### 异步actions：
>actions中：
>>1：`return (dispatch) => {}` //返回一个函数，参数等同于`store.dispatch()`
>>2：在返回的函数中写异步操作
>>3：等异步操作完成后`dispatch({type: INCREMENT, data: value})`
>
>store中：
>>1：`import thunk from 'redux-thunk'` //引入thunk中间件
>>2：`const store = createStore(allReducer, applyMiddleware(thunk))` //设置中间件

##### react-redux：
>(将组件分为UI组件和容器组件)
>
>-index.js中：
>>1：`import { Provider } from "react-redux"  import store from "url"` //引入
>>2：`<Provider store={store}><App /></Provider>`
>
>-App.jsx中：只用插入容器组件就行了
>
>-containers中：
>>1：引入UI组件和`import { connect } from "react-redux"`和Action等方法
>>2：`const container = connect(state => (state) , {fnName: action1})(UI组件名)`
>>>参数1：把`store.getState()`的值传给UI组件 
>>>参数2：给UI组件传递一个方法，调用时等同于`store.disPatch()`
>>
>>3：暴露container

容器组件简写：把容器组件和UI组件写在一个文件里，只暴露容器组件


## Vue2：
##### Vue实例化实参对象的属性：
>el：用来指定容器，可写选择器和DOM节点，同`vm.$mount("选择器")`
>data：提供vm的数据，供DOM使用，有对象和函数写法
>>data:{} //对象式
>>data() `{return { }}` //函数式：当data被多次复用时，改变一个时影响全部 
>methods：用来存放事件函数
>template：\`html结构\` //定义了的话会找到容器然后替换容器
>mixins:[模块] //混入，不同的组件js代码重复时使用，该模块只需暴露一个配置对象
>functional: true //定义函数式组件

##### 双发括号语法(插值语法)：
>内部为js语法，可书写js表达式
>当书写变量/属性时，会在vm上寻找 // `{{内容}}`等于`vm.内容`
>不管是什么类型都会被渲染成字符串，nullish值不会被渲染

##### 数据代理：
>(为了更方便的去访问_data中的数据)

>原理：通过一个对象方便调用的属性用getter和setter存取器去代理另一个对象中属性的读/写操作
>体现：`proxyGetter()和proxySetter(val)`

##### 数据劫持：
>(为了捕获到数据的改变，进而重新解析模板)

>原理：给_data里的数据用defineProperty的getter和setter存取器去设置一个监听，一旦发生变化，就会调用相应的函数
>体现：`reactiveGetter()和reactiveSetter(newVal)`
>对象：每一层数据都有数据劫持
>数组：数组有数据劫持但里面的值没有，只有数组的地址改变了才会被重新渲染，数组里只要不返回新数组的方法都被包装过
>`this.$set(a,b,c)/Vue.set((a,b,c)`：//后来给data里添加新属性时是没有响应式的
>>a:需要添加属性的对象
>>b:需要添加属性的属性名(字符串)
>>c:需要添加属性的属性值

##### 强制绑定(单项绑定)：
>v-bind:属性名="data" //引号内为js语法可写表达式

##### 双向绑定(MVVM)：
>(标签属性的值和data数据的值会互相影响)

>表单标签value属性：v-model:value
>单复选框：绑定的data为布尔值，得知是否选了
>多复选框：绑定的data为数组，选中时会把其value放在数组中，得知选择那些
>单选框：绑定的data为字符串，选中时会把其value给data，得知选择那个
>下拉列表：原理同复选框

##### 事件绑定：
>`v-on:事件类型="事件函数" `

>事件函数放在Vue实例化实参的methods属性中
>引号中也可以直接书写简短的语句

##### 事件对象：
>(事件函数在绑定时加小括号和不加小括号都是事件出发时才调用)

>加小括号：形参event失效，可通过$event实参传递，形参一一对应接收
>不加小括号：不需要传参时使用，形参就是event了

事件修饰符：
>`@事件类型.修饰符=""`

>`.prevent`：当前事件阻止默认事件
>`.stop`：当前事件阻止传播
>`.prevent.stop`：当前事件阻止默认事件和传播
>`.sync`：实现父子组件双向数据同步，`@click = $emit("update:属性名",要更新的数据)`
>>键修饰符：键别名
>>>`.enter`：回车
>>>`.space`：空格
>>>`.delete`：删除
>>>`.tab`：tab键
>>>`.esc`：esc键
>>>`.up`：上键
>>>`.down`：下键
>>>`.left`：左键
>>>`.right`：右键
>>
>>键修饰符：键码 //`.键码`

##### Style的动态绑定：
>方法一：`v-bind:style="{ data }"`
>方法二：`v-bind:style=" data"` // data为数据里值为对象的属性

##### class动态绑定：
>字符串形式：`v-bind:class="data"`//常用于一个类名，且这个类名不确定
>
>对象形式：`v-bind:class="objClass"`
>> objClass为数据里值为对象的属性
>>该对象的key就是各个类名，value是布尔值，代表使用当前类
>>用于类名已经确定，但不知是否使用
>
>数组形式：`v-bind:class="calssArr" `
>>calssArr为数据里值为数组的属性
>>数组里存放的就是各个类名
>>用于类名不确定个数不确定

##### 插值语法实现：
>封装函数：
>>在methods里封装一个函数返货数据逻辑，然后在插值语法里直接调用
>>当使用多次或数据逻辑改变时，都会被调用
>
>计算属性：`computed: { key: { get() {} , set(val) {} } }`
>>key：创建的一个计算属性
>>get：对属性读时的操作
>>set：对属性写时的操作
>>简写：`computed: { key() {return 操作}}`
>>>return：返回计算属性的值
>
>监听属性：`watch: { key : { deep : true , immediate : true , handler (new,old) {操作} } }`
>>key：被监听的数据
>>deep：是否深度监听
>>immediate：是否立即监听
>>handler：为一个函数，当监听的数据发生改变时，执行操作
>>>new：监听的数据改变后的值
>>>old：监听的数据改变前的值
>>
>>简写：`watch: { key() : {操作} }`

##### computed和watch的区别：
>相同：去监听依赖数据，当发生变化的时，就会调用相关函数
>
>computed：多个数据影响一个数据，会创建一个新属性，存在依赖数据或依赖数据改变时调用，注重于算，具有响应式依赖缓存，需要return，不能异步
>
>watch：一个数据影响多个数据，不会创建新属性，监听数据改变时调用，注重于监听，无需return，函数里直接写对数据的操作，可异步


##### 条件渲染：
>(当data为truthy时则渲染其标签，其逻辑判断同js语法)

>`v-if="data"`
>`v-else[="data"]`：必须跟在v-if或v-else-if指令元素的后面，且为相邻兄弟
>`v-else-if="data"`：进行更多的判断，必须跟在v-if后面，且为相邻兄弟
>`<template>`：备胎标签，把需要判断的多个标签括起来

##### 条件样式：
>(只是改变了标签的display属性)

>`v-show="data"：`

##### v-if和v-show对比：
>v-if：是渲染，会挂载和卸载标签，惰性
>v-show：是改变样式，都会被渲染上去
>当切换频繁时用v-show，当数据量比较大时用v-if

##### 列表渲染：
>`v-for="(item[,value]) of/in arr"`

>在标签上书写，对arr进行遍历，生成`arr.length`个标签
>插值语法绑定属性中的数据会先到v-for上查找，然后再去vm
>可以遍历对象，即`Object.keys(obj)`

##### v-html和v-text： 
>(会覆盖当前元素中所有的内容)

>`v-html`：会解析所有标签，同js中innerHTML语法
>`v-text`：不会解析所有标签，同js中innerText语法

##### Vue中vm的生命周期：
>(单个组件生命周期)

>初始化阶段：
>>1：实例化vm //此时vm上什么都没有
>>2：初始化事件与生命周期
>>3：beforeCreate(){} //创建前
>>4：初始化数据劫持与数据代理 //此时vm上有data数据了
>>5：created(){} //创建后
>
>解析模板阶段：
>>```
>>6：if(有"el"选项){
>>    if(有"模板"选项){
>>        将el容器替换成"模板"
>>    }else{
>>        将el容器编译成"模板"
>>    }
>>   }else if(执行vm.$mount(el)){
>>    if(有"模板"选项){
>>        将el容器替换成"模板"
>>    }else{
>>        将el容器编译成"模板"
>>    }
>>   }else{
>>    一直等待
>>   }
>>   生成虚拟DOM
>>```
>
>挂载阶段：
>>7：beforeMount(){} //挂载前，此时页面渲染的是html标签，Vue的DOM操作不奏效
>>8：将内存虚拟DOM转换成真实DOM插入页面
>>9：*mounted(){} //挂载后，Vue的DOM操作起效
>
>更新阶段：
>>```
>>10：when(数据改变){
>>    11：beforeUpdate(){} //数据更新后，页面更新前
>>    12：新旧DOM进行Diff算法，然后更新页面
>>    13：updated(){} //数据更新后，页面更新后
>>}
>>```
>
>卸载阶段：
>>```
>>14：when(vm.$destroy被调用){
>>        15：*beforeDestroy(){} //此时该阶段指令都处于可用状态，处于马上销毁状态
>>        16：卸载vm，此时vm上的数据和方法依然可用可操作，只是无法使用vm了
>>        17：destroyed(){} //卸载完成后
>>}
>>```

##### (路由缓存组件生命周期)：
>`actived(激活)`：//当路由跳转到当前组件时触发，第一次时在当前组件mounted后面
>`deactived(休眠)`：//当路由跳转到另一个组件时触发，第一次时在另个组件beforeMount后面

##### (捕获子孙组件错误的生命周期)：
>`errorCaptured`：//当子孙组件发生报错时会传递到该生命周期中，`return false`即可处理错误

##### 组件定义：
>`const 组件名 = Vue.exted({option})`

>option同`new Vue`里的option
>返回一个`VueComponent(option){}`组件构造函数
>当组件构造函数被注册和使用时会被实例化出一个`vc(组件实例)`
>vc是一个小型的vm，没有el属性
>此option里的data需要写成函数式，因为组件会被使用多次，防止干扰
>每个组件都有自己的vc和`VueComponent(option){}`
>组件里的this指向vc
>简写：`const 组件名 = {option}` //可直接赋值一个配置对象，Vue底层会进行判断，调用相应的函数
>option:
>>name:"" //Vue的工具中展示的组件名
>>template:`` //组件自己的虚拟DOM

##### 注册组件：
>`components:{注册的名字:原来的名字}`

>位置：在需要插入的option中声明
>顺序：先定义后注册
>全局注册：`Vue.component("组件名",组件名)`

##### 组件深入：
>1：动态组件：`<component :is="已注册的组件名" />` //会通过会不同的组件名去渲染不同的组件
>2：缓存组件：//当使用动态组件切换时默认是卸载/挂载的过程，这时就可以用到路由缓存
>3：异步组件：`import("组件url")` //会异步引入一个组件，返回promise实例，其值就是暴露的对象
>4：函数式组件：
>>```
>><script>
>>  export default {
>>    name: "XXX",
>>    props: ["title", "imgUrl"],
>>    functional: true,
>>    render(createElement, context) {
>>      const { title, imgUrl } =
>>        context.propsreturn[((<h2>{title}</h2>), (<img src={imgUrl} />))];
>>    },
>>  };
>></script>
>>```
>>无状态(没有data)/无法实例化(没有this)/没有生命周期/轻量/可以没有根标签
>
>5：递归组件：组件内部有自己的子组件标签，递归组件必须有name

##### ref属性：
>作用：获取标签的真实DOM，获取组件的vc
>用法：`<h1 ref="xxx">.....</h1>或<School ref="xxx"></School>`，`this.$refs.xxx`获取


##### 组件间通信方式：
>**1：props属性：**//用于父组件与子组件之间传递数据
>>定义：`<组件A property='value'></组件A >` //所有标签属性都会成组件对象的属性
>>接收：//类似于创建一个_props仓库，用于接收传过来的数据，也有数据代理/劫持
>>>`props: [ 'property' ]`
>>>`props: { property: String }` //给传值限制类型
>>>`props: { property: {type: String, required: true, default:xxx, validator:(value) => {}}` //类型/必要性/默认值/返>回true
>>
>>使用：直接通过name使用，也已通过`_props.name`使用
>>
>>props只读：
>>>_props中的值是不能改变的，需通知数据拥有者修改
>>>对于对象类型而言只要不修改地址，则不会报错
>
>**2：自定义事件：**//实现子组件与父组件的通信
>>父组件中：
>>>方法一：`<MyChild @事件名="回调函数" />` //只能有被给的组件触发事件
>>>方法二：`mounted() { this.$refs.组件.$on("事件名", (value) => {}) }`
>>
>>子组件中：`this.$emit("事件名",数据)`
>>事件解除：`this.$off(["事件A", "事件B"])` //在子组件中调用
>>组件绑定原生DOM事件：`@事件类型.native="回调调函"`
>
>**3：消息订阅与发布：**//实现任意组件间的通信
>>下载：`PubSubJS：npm install -S pubsub-js`
>>发布：`PubSub.publish("订阅名", 数据);`
>>订阅：`PubSub.subscribe("订阅名", (name, value) => {})`
>>>name：订阅名
>>>value：数据
>>
>>取消订阅：`PubSub.unsubscribe("订阅名")`
>
>**4：事件总线：** //实现任意组件间的通信
>>安装：在入口文件中配置`beforeCreate() { Vue.prototype.$bus = this }`
>>定义事件：`this.$bus.$on("事件名", (数据) => {})`
>>触发事件：`this.$bus.$emit("事件名", 数据)`
>>解除事件：`this.$off(["事件A", "事件B"])` //最好在beforeDestroy()中调用
>
>**5：插槽：**//实现父子间的通信
>>默认插槽：//父传子
>>>父组件：`<MyChild>html结构</MyChild>`
>>>子组件：`<slot>插槽默认内容...</slot>`
>>>使用场景：复用组件时，大部分结构一样，但小部分结构不一样
>>
>>具名插槽：
>>>父组件：`<template slot="footer"/v-slot:footer/#footer>html结构</template>`
>>>子组件：`<slot name="footer">插槽默认内容...</slot>`
>>>使用场景：结构和slot需要一一对应时使用
>>
>>作用域插槽：//子传父
>>>父组件：`<template scope="msg">html结构</template>` //没有name时
>>>>新写法：`/v-slot:bb="{...}"/#bb="{... }"` //有name时
>>>>数据存在了msg中，为一个对象，用时请解构
>>>
>>>子组件：`<slot :msg="msg" [name="aa"]></slot>` //类似props传值
>>>使用场景：数据在父组件，传递给子组件并渲染，结构和样式必须父组件修改
>
>**6：vuex：**//状态管理，数据共享，实现任意组件间的通信
>>使用步骤：
>>>1.下载vuex：`npm i vuex`
>>>2.引入vuex
>>>3.使用vuex：`Vue.use(Vuex)` //必须在new Vuex.Store({})之前
>>>4.在new Vue的option中配置store //store的值为Vuex.Store的实例对象
>>>>`new Vuex.Store({actions, mutations, state, getters})` //里面的属性必须为对象
>>
>>包含内容:
>>>Actions：//整理、分发v.n.，主要用于处理异步操作的
>>>>定义：`actions = { 方法名(miniStore, value){} }`
>>>>调用：`this.$store.dispatch("行为名",数据)`
>>>
>>>Mutations：//用来修改state中的数据，其中的函数必须是同步的
>>>>定义：`mutations = { 大写行为名(state, value){} }`
>>>>调用：`this.$store.commit("大写方法名",数据)`
>>>
>>>State：//主要用来存放共享的数据
>>>
>>>Getters：//Vuex中的计算属性，对共享数据进行计算处理 
>>>>定义：`getters = { 属性名(state,obj) {} }` //obj为对象key为属性名value为return的值
>>>>使用：通过`$store.getters.xxx`获得
>>>
>>>Modules：`{ SonStore }` // vuex的state模块化配置，SonStore为暴露的对象，五脏俱全
>>>
>>>namespaced:true //vuex只会模块化state，用命名空间解决其他冲突
>>>
>>>plugins: [myPlugin] //用来接收插件的
>>
>>四个map方法：
>>>`...mapState(['sum'])` //创建一个计算属性sum，计算`$store.state.sum`
>>>>`...mapState({sum: (state) => {return state}})` //实现深层次的计算
>>>
>>>`...mapGetters(['bigSum'])` //创建一个计算属性bigSum，计算`$store.getters.bigSum`
>>>`...mapActions(['waitAdd '])`//创建一个名为waitAdd的方法，并调用`this.$store.dispatch("waitAdd",数据)`
>>>`...mapMutations({ add: "ADD"})` //创建一个名为add的方法，并调用`this.$store.commit("ADD ",数据)`
>
>**7：`$attrs`和`$listeners`：**//实现父向子通信
>>本质：父组件给子组件传递的所有属性或事件监听组成的对象
>>使用：可以通过v-bind或v-on一次把父组件传递过来的属性或事件给子组件
>>应用：对一个组件进行二次封装
>>`$attrs`里不包含props接受过的属性以及样式相关的属性(style/class)
>
>**8：`$paren`t和`$children`以及`$refs`：**
>>`$parent`：//所有父组件对象的数组，实现子向父通信，顺序不定(禁用)
>>`$children`：//所有子组件对象的数组，实现父向子通信，顺序不定(禁用)
>>`$ref`：//实现父向子通信
>
>**9：`v-model`/`.sync`：**//实现父子之间相互同步，其实就是props和自定义事件的一个简化
>
>**10：`provide`/`inject`：**//实现祖孙之间之间通信的，类似于props，不建议使用以为除属性外的数据没有响应式
>>provide：在option中配置`provide () {return {XXX: this.XXX}}`
>>inject：配置在子孙组件option中同props

##### vue-router：
>(专门用来实现SPA应用)

>**基础使用步骤：**
>>1.下载`vue-router：npm i vue-router -S`
>>2.引入`vue-router`
>>3.使用`vuex-router：Vue.use(VueRouter)` //必须在`new VueRouter ({})`之前
>>4.在`new Vue`的option中配置router //router的值为VueRouter的实例对象
>>>`new VueRouter({ routes:[{path:"/XXX",component:组件}]})`
>>
>>5.配置路由展示区：`<router-link active-class="active" to="/XXX "></router-link>`
>>6.配置路由内容区：`<router-view></router-view>`
>>7.此时Vue会在vm上创建$route和$router属性共使用，组件的该属性都指向父组件
>
>**多级路由：**
>>配置：在一级路由对象中`children: [{path: "bbb",component:组件]`
>>跳转：`<router-link to="/XXX/bbb">跳转</router-link>`
>
>**命名路由：**//可以简化路由的跳转
>>配置：在routes中path的上面配置：`name: "XXX"` //类似把path的地址赋值给name
>>简化跳转：`<router-link :to="{ name: 'XXX' }">跳转</router-link>`
>
>**路由重定向：**在routes中配置`{path: "/",redirect: "/XXX"}`
>
>**路由的传值：**
>>params参数传值： 
>>>导航区一：`:to="`/XXX/aaa/${item.id}`"`
>>>导航区二：`:to="{name: 'XXX',params: {id: item.id}}" `
>>>routes配置：`path: "aaa/:id "`
>>>获取：`$route.params.XXX获取`
>>>注意事项：
>>>>to的对象写法只能用name，不能用path
>>>>参数的值千万不能是空字符串！！！否则只能跳转一次，以后就废了
>>>>可以通过`/:title?`这种形式，去指定参数可传、可不传
>>
>>-query查询字符串传值：
>>>导航区一：`:to="`/XXX/aaa?id=${item.id}&content=${item.content}`"`
>>>导航区二：`:to="{name: 'XXX', '/XXX/aaa',query: {id: item.id,}}"`
>>>routes配置：`path: "aaa"`
>>>获取：`$route. query.XXX`获取
>>>注意事项：
>>>>to的对象写法能用name和path
>>>>参数的值千万不能是空字符串！！！否则只能跳转一次，以后就废了
>
>**路由的props配置：**//在需要传参的路由配置对象中配置
>>写法一：`props: true,` //只适用于params参数传值
>>写法二：`props:{key:value}` //固定了props的传参
>>写法三：`props: ($route) => ({...$route.query/params})`
>>在路由的组件中需要用props接收
>
>**路由的meta配置：**//路由时携带的一些固定消息，`$route.meta.XXX`获取
>
>**缓存路由组件：**//让不展示的路由组件保持挂载，不被销毁，包裹路由内容区
>>缓存所有：`<keep-alive></keep-alive>`
>>缓存多个：`<keep-alive :include="['News','Message']"></keep-alive>`
>>缓存一个：`<keep-alive include="News"></keep-alive>`
>>include：包含的组件缓存
>>exclude：排除的组件不缓存，优先级大于include
>>注意：include中的值为组件配置对象中的name
>
>**replace(替换)/push(添加)属性：**
>>作用：控制路由跳转时操作浏览器历史记录的模式
>>配置：配置在router-link标签中，为其属性
>
>**编程式路由导航：**//不借助`<router-link>`实现路由跳转
>>`this.$router.forward()` //前进
>>`this.$router.back()` //后退
>>`this.$router.go(n)` //可前进或可后退n步
>
>**重复编程式路由导航BUG：**//当重复点击时会报错： NavigationDuplicated
>>原因：因为`.push`返回的是promise实例则点击第二次时会调用reject当reject没有处理时会报错
>>解决方法：
>>>一：`push("路径","()=>{}","()=>{}")` //第二/三个回调同resolve/reject
>>>二：`push("路径").catch(() => {})`
>>>三：重写push和replace-->/router/index.js-10
>
>**滚动行为：**//当切换到新路由时，想要页面滚到想要的位置
>>位置：在vue-router实例化时配置在其参数中
>>配置：`scrollBehavior(to, from, savedPosition) {return {x: 0, y: 0} }`
>
>**路由导航守卫：**//主要用来通过跳转或取消的方式守卫导航，类似拦截器
>>全局守卫：//监听所有路由的跳转，并调用其函数
>>>全局前置守卫：`router.beforeEach((to, from, next) => {})`
>>>全局解析守卫：`router.beforeResolve((to, from, next) => {})`
>>>全局后置守卫：`router.afterEach((to, from, next) => {})`
>>
>>路由独享守卫：//监听指定路由的跳转，并调用其函数
>>>`beforeEnter: (to, from, next) => {}`
>>
>>组件内的守卫：//以组件的视角监听，进入、跳出、刷新时调用其函数
>>>`beforeRouteEnter(to, from, next) {}` //加入组件时调用
>>>`beforeRouteUpdate (to, from, next) {}` //更新组件时调用
>>>`beforeRouteLeave (to, from, next) {}` //离开组件时调用
>
>**路由懒加载：**//懒加载组件，不访问就不加载
>>原理：把不同路由组件分成不同的代码块打包，然后当路由访问时才加载其组件
>>使用：
>>>原来：`import 组件名from 'url'`
>>>替换成：`const 组件名 = () => import(' url ')`

##### 过滤器：
>(对要显示的数据进行特定格式化后再显示)

>使用：`{{ value | 过滤器A | 过滤器B }}`
>>局部注册：在option中配置filters: `{ 过滤器A (a,b) { return 操作 } }`
>>>a：插值语法中的value
>>>b：过滤器传的参数
>>
>>全局注册：`Vue.filter("过滤器",回调函数)`
>>注意：不修改原数据，this永远指向undefined

##### 自定义指令: 
>(对被指令的标签特定的操作)

>使用：在标签或组件上配置 `v-指令名="value"`
>局部注册：`directives: { 指令名(a, b, c, d) {} }`
>>a：被设置指令的真实DOM节点
>>b：配置对象，包含了指令的value
>   
>全局注册：Vue.directive("指令名",回调函数)
>注意：使用时要加v-xxx，指令如果是多个单词请使用xxx-xxx，this永远指向undefined

##### 指令的补充：
>`v-pre`：配置在标签上后，该标签以及子标签都不会被vue解析
>`v-ones`：配置在标签上后，该标签以及子标签只会被解析一次，之后不会被vue解析

##### Vue源码分析：
>1：为data中的数据实现数据代理
>2：给每一个data中的数据以及其子属性添加dep实例(id和subs)和数据劫持
>3：把真实DOM变成碎片节点(虚拟DOM)
>4：依据碎片节点一个一个节点的寻找插值
>5：拿到插值后去_data中找到对应的数据，然后替换节点中的插值语句
>6：给data中数据的subs添加watcher(有几个地方使用该数据就有几个watcher)
>7：给每一个用到的插值语法的watcher添加deplds，其key为dep的id，value为dep
>8：当有数据更新时会先通知到所有的watcher，然后watcher重新寻找自己的新value
>9：解析指令：
>>寻找元素节点中的属性
>>判断属性是为为指令，以"-v"为基准
>>然后通过截取拿到后面的指令去做对应的事情

##### Vue动画：
>(实现一个元素显示/隐藏切换的动画)

>Vue动画关键帧动画：
>>在目标元素外包裹`<transition name="XXX">`
>>编写关键字
>>进入时样式：`XXX/v-enter-active {}`
>>离开时样式：`XXX/v-leave-active {}`
>
>Vue动画过度动画：
>>在目标元素外包裹`<transition name="XXX">`
>>进入样式：
>>>进入的起点（xxx-enter）
>>>进入的终点（xxx-enter-to）
>>
>>离开样式：
>>>离开的始点（xxx-leave）
>>>离开的终点（xxx-leave-to）
>>
>>给发生变化的元素加：`transition: 1s all linear`
>
>集成第三方动画库：
>>下载animate.css
>>引入animate.css
>>给要进行动画的元素添加一个固定类名 animate__animated
>>给transition扩展enter-active-class 和 leave-active-class类名为animate.css提供的类名

##### MockJS：
>(模拟服务器接口，生成随机数据，拦截Ajax请求)

>1：安装mockjs
>2：创建json文件和mockServer.js文件在mock(随意)文件夹中
>3：在mockServer.js中引入mockjs和json文件
>4：`Mock.mock("接口", {code: 200, data: banner})`
>5：在main中引入mockServer.js
>6：在ajax当中修改Ajax中的baseUrl为/mock,变为一个新的文件mockAjax

##### Swiper轮播图：
>(开源、免费、强大的触摸滑动插件)

>1：下载swiper //`npm i swiper@5`
>2：引入`swiper.min.j`s和`swiper.min.css`
>3：书写轮播图的html结构
>4：在得到了数据且渲染了DOM的地方实例化swiper，可使用`vm.$nextTick(()=>{})`
>>`(vm/vc.$nextTick(()=>{}))` //等待页面最近一次更新完成后执行回调
>
>5：可以把轮播图结构当成组件提取出来

##### 图片懒加载：
>(当图片加入视口时加载图片)

>原理：当图片得到url时就会加载，可以先给自定义属性，原本url存放laoding
>使用：
>>1：`npm i vue-lazyload` //下载vue-lazyload
>>2：`import VueLazyload from 'vue-lazyload'` //引入vue-lazyload
>>3：`Vue.use(VueLazyload, {loading: 'dist/loading.gif'})` //使用vue-lazyload
>>4：`<img v-lazy="url " />` //把需要懒加载的img标签的src属性改成v-lazy

##### 表单验证：
>(当表单格式不正确时给出提示或弹框)

>1：`npm install -S vee-validate@2.2.15` //下载vee-validate
>2：`import VeeValidate from 'vee-validate'` //引入vee-validate
>3：`Vue.use(VeeValidate)` //使用vee-validate
>4：单独验证：
>>```
>><input v-model=" XXX" name="phone" v-validate="{required: true,regex: /正则/}" :class="{invalid: errors.has('phone')}">
>><span class="error-msg">{{ errors.first('phone') }}</span>
>>```
>
>5：整体验证
>6：提示文本信息本地化
>7：`import zh_CN from 'vee-validate/dist/locale/zh_CN'` // 引入中文message
>8：
>>```
>>VeeValidate.Validator.localize("zh_CN", {
>>  messages: { ...zh_CN.messages, is: (field) => `${field}必须与密码相同` },
>>  attributes: { phone: "手机号", code: "验证码" },
>>});
>>```
>
>9：自定义规则：
>>```
>>VeeValidate.Validator.extend("agree", {
>>  validate: (value) => {
>>    return value;
>>  },
>>  getMessage: (field) => field + "必须同意",
>>});
>>```

##### 前端项目流程：
>![img-021](images/021.png)

## UI组件库：
##### ElementUI：
>1：完整引入：
>>`npm i element-ui -S npm` //安装element-ui
>>`import ElementUI from 'element-ui'` //引入element-ui
>>`import 'element-ui/lib/theme-chalk/index.css'`
>>`Vue.use(ElementUI)`
>
>2：按需引入
>>`npm install babel-plugin-component -D` //安装element-ui
>>在babel.config.js中配置
>>>`"plugins": [["component",{"libraryName": "element-ui","styleLibraryName": "theme-chalk"}]]`
>>
>>`import { Button, Select } from 'element-ui'` //按需引入
>>普通组件`Vue.use()` 
>>函数组件`Vue.prototype.$XXX=XXX` //在需要组件时调用`this.$XXX()`

## Vue3：
> 支持 Vue2 大多数特性，更好的支持 TS，性能上大大提升

>[官方文档](https://v3.cn.vuejs.org/)

##### 特点：
>1：MVVM 使用代理和反射
>2：重写虚拟 DOM 的 Diffing 算法和实现高效率的 Tree-Shaking
>3：使用组合 API，可以很好的 hooks
>4：Teleport //是一个内置组件，保存 DOM 的状态下瞬移组件的位置
>5：Suspense //是一个内置组件，异步加载组件的 loading 界面(骨架屏)
>6：全局 API 的修改

##### 创建Vue3项目：
>和 vue2 大致一样，只是需要选配置，包括：TypeScript/Router/Vuex/3.x，其他的回车即可

##### Vue3脚手架创建的文件介绍：

>.browserslistrc //配置兼容浏览器
>
>>`" >1%"` :代表着全球超过 1%人使用的浏览器
>>`"last 2 versions"` : 表示所有浏览器兼容到最后两个版本
>>`"not ie <=8"` :表示 IE 浏览器版本大于 8（实则用 npx browserslist 跑出来不包含 IE9 ）
>
>.eslintrc.js //eslint 的配置

##### 全局 API：
>defineComponent：//返回传递给它的对象，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持

##### Composition API (组合 API)：
>**setup() {}：**
>> 功能：Composition API 的入口函数，只会执行一次，相当于 vue2 生命周期中的 beforeCreate
>> 参数：
>> > props：一个对象，包含父组件向子组件传递的数据，并用 props 接收的所有属性
>> > context：一个对象，其属性有：
>> >
>> > > attrs：类似`this.$attrs`
>> > > emit：类似`this.$emit`
>> > > slots：类似`this.$slots`，为一个对象，包含所有传入的插槽内容
>>
>> 返回值：需返回一个对象，其值为 setup 中用到的属性和方法，在模板中可以直接使用
>> 注意：
>> > 1: setup 类似于 beforeCreat 但在 beforeCreate 之前执行，意味着 this 根本就不能用，其实，组合 API 中的 this 都不可用
>> > 2: setup 返回的属性和方法会和 data 中的数据合并
>> > 3: setup 函数不能 async
>
>**ref()：**
>
>> 功能 1：接收一个数据，并让其是响应式的
>> 参数：一般是一个基本类型的数据
>> 返回值：返回一个 ref 对象，其响应式数据在 value 属性上，插值语法中不用.value 使用
>> 注意：
>>
>> > 1: ref 也可以传入对象实现响应式数据，内部会默认调用 reactive
>> > 2: ref 的实现原理还是 getter/setter 存取器属性
>>
>> 功能 2：获取元素
>>> ```
>>> <a ref="aaa"></a>
>>> <a ref="bbb"></a>
>>> const aaa = ref<any>("aaa")
>>> const bbb = ref<any>("bbb")
>>> ```
>
>**reactive()：**
>
>> 功能：接收多个数据，并让其是响应式的
>> 参数：一般是一个复杂类型的数据
>> 返回值：返回普通对象的响应式代理(proxy)对象
>> 注意：在删除或添加属性时，目标对象和代理对象都具有响应式
>
>**computed()：**
>
>> 参数：
>>
>> > 只读：`() => {return xxx}`
>> > 读写：`{get () {} , set (value: number) {}}`
>> > 返回值：ref 对象，其属性 value 的值为函数内部的 retrun
>
>**watch()：**
>
>> 参数：
>>
>> > 监视单个：`watch(msg,(newVal,oldVal) => {})`
>> > 监视多个中的某个：`watch(() => state.a,(newVal,oldVal) => {})`
>> > 监视多个：`watch([msg,() => state.a,() => state.b.c],(newVal,oldVal) => {}`
>> > 第三个参数：`{immediate:true,deep:true}`
>>
>> 返回值：ref 对象，其属性 value 的值为函数内部的 retrun
>
>**watchEffect()**：//不需要配置 immediate，本身默认就会进行监视，默认执行一次
>
>**toRefs()：**
>
>> 功能：当 reactive 去实现了一个响应式数据时，通过结构的方式去获取其中的属性，此时是没有响应式的。toRefs 可以把响应式对象转换>成普通对象，并该普通对象的每一个属性都是 ref
>> 
>> 参数：proxy 对象
>> 
>> 返回值：把普通对象每一个属性都变成 ref 对象的对象
>
>**shallowReactive：**//只会把对象最外层的数据进行响应式
>
>**shallowRef：** //只处理了 value 的响应式
>
>**readonly()：** //功能：让其传递的参数变成深度只读
>
>**shallowReadonly()：**//让其传递的对象最外层变成只读
>
>**toRaw()：**//传递一个 proxy 对象让其变成普通对象
>
>**markRaw()：**//传递一个 proxy 对象让其变成普通对象，并永远不能变成 proxy 对象了
>
>**toRef():**
>
>> 功能：把响应式数据中的某个属性变成 ref 对象并和其属性是互通的
>> 参数：proxy 对象
>> 返回值：把普通对象每一个属性都变成 ref 对象的对象
>
>**customRef：**//创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 track 和 >trigger 函数作为参数，并且应该返回一个带有 get 和 set 的对象。
>
>**provide("标识", 数据)：**//在爷组件中定义
>
>**inject("标识")：**//在孙组件中定义，可直接获取到数据
>
>**判断响应式数据：**
>> isRef(数据) //判断数据是否为 Ref 对象
>> isReactive(数据) //判断数据是否为 reactive 创建的对象
>> isReadonly(数据) //判断数据是否为只读对象
>> isProxy(数据) //判断数据是否为 reactive 和 readonly 方法创建出来的代理

##### 响应式原理： 
>(通过 ES6 的 Proxy(代理)和 Reflect(反射)实现)

>Proxy(代理)：对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义
>> 使用：`let proxyObj = new Proxy(obj,{ handler 对象的方法})`
>> > obj 为需要监听的对象
>> > handler 对象方法为捕捉器方法
>> > proxyObj 为代理对象
>>
>> 捕捉器：
>> >```
>> > get(target, property) {return Reflect.get(target, property)}
>> > set(target, property, value) {Reflect.set(target, property, value)}
>> > deleteProperty(target, property) {Reflect.deleteProperty(target, property)}
>> >```
>
>Reflect(反射)：是一个内置的对象，它提供拦截 JavaScript 操作的方法类似于 Math 对象

##### 生命周期：
>setup
>ue
>onMounted
>onBeforeUpdate
>onUpdated
>onBeforeUnmount
>onUnmounted
>onErrorCaptured
>>vue2 中的 beforeDestroy 和 destroyed 在 vue3 中改名了为 beforeUnmount 和 unmounted

##### vue3 新组件：
> Fragment //片段，在 vue3 中的主键可以不需要唯一的根标签，内部会将多个标签包含在 Fragment 蓄力元素中
> 
> Teleport //瞬移，干净的将一个结构移动到另一个结构中
> > `<Teleport to="body"></Teleport>`
>
> Suspense //不确定的，当异步主键还没显示前显示一些 html 结构
>>```
>><Suspense>
>>    <template #default ><异步组件></template>
>>    <template v-slot:fallback >Loading</template>
>></Suspense>
>>```

##### vue3 中动态引入组件：
>`组件名=defineAsyncComponent(()=>import("地址"))`

## Vue权限相关：
##### 菜单(路由)权限控制：
>(通过用户的权限去限制能访问那些菜单(控制路由注册))

>1：用户登录->获取token->前置路由守卫->token校验->获取用户信息
>2：在用户信息里会得到权限信息(routes,buttons,roles)并保存起来
>>routes：能被访问的路由对象里面的name属性的值组成的数组
>>buttons：自己定义的标识字符串组成的数组
>
>3：然后我们需要把原来注册的路由分为一下三种路由：
>>常量路由：一开始需要被注册的路由，所有用户的能访问的路由
>>所有异步路由：需要用户权限信息才能访问的所有路由，暂不注册
>>任意路由：访问没有的路由时重定向到404的路由，暂不注册，需要放在最后面
>
>4：通过保存的权限信息在所有异步路由中去过滤该，最终要得到该用户有权访问的异步路由组成的数组
>5：在对应的菜单栏组件中拿到常量路由、有权访问的异步路由、任意路由拼接成的数组去遍历生成菜单
>6：使用路由器对象. `addRoutes([...有权访问的异步路由,... 任意路由])`的动态添加(注册)路由方法去注册路由

##### 菜单(路由)权限管理：
>(用户的权限数据怎么增删改查，分为以下三大类，关系都是多对多)

>用户的增删改查：
>>增：发请求关联数据库，可以分配角色，此时用户信息的权限数据就会被添加 
>>查：当用户搜索的时候会双向绑定收集数据，准备一个容器把数据克隆一份给容器，点击翻页时发请求的数据为容器数据，当点击搜索的时候容器数据会拿到双向绑定的新数据，然后进行请求
>角色的增删改查：
>>增：增加完角色后需要给该角色添加权限(tree结构的用法)，分配tree结构权限时，需要获取所有的上级id，否则权限添加不上，因为在菜单展示的时候，连上级路由都没注册，所有子路由自然不会展示
>
>权限的增删改查：//也是tree结构
>>增：映射菜单使用的，可添加各级的权限，可以理解为每一个路由就是一个权限，添加了权限之后需要授权，admin会自动授权

##### 按钮权限控制：
>(按钮级别权限依赖于菜单级别权限)

>1：定义一个函数：接收一个自己定义的权限字符串，判断用户的权限信息里面是否包含此字符串，然后返回布尔值，把此函数绑定在vue原型对象上
>2：给标签添加v-is/disabled，在值里面调用此函数，传自己定义的权限字符串参数，返回布尔值实现权限控制

##### 按钮权限管理：
>添加权限：在权限管理中，找到需要添加按钮权限的路由页面，在其下面添加按钮权限，名称为按钮的名字，权限值为字符串(btn.Spu.add)，添加完权限后需要对其控制和授权

## 脚手架
##### Vue-CLI：
>说明：Vue-CLI //command line interface client
>
>创建Vue项目：
>>`npm install -g @vue/cli`
>>`vue create name`
>>`npm run serve`
>
>vue-template-compiler工具：
>>作用：当Vue脚手架使用runtime文件时，提供渲染方法
>>>使用：`new Vue({ render: (h) => h(App) });`
>>>render：配置方法，当Vue实例化时调用，
>>>>`h：(a,b,c,d) { return createElement(vm,a,b,c,d,true) }` //挂载函数
>>>>`h(App)`：返回一个VNode对象，需要被return
>>>
>>>只需要在App组件中挂载即可
>
>ESLint：//代码规范检查工具，vue脚手架自带，关闭方法：
>>`/*eslint-disable-next-line*/`
>>`/*eslint-disable*/`
>>`vue.config.js`中配置`module.exports = {lintOnSave: false};`
>>`package.json`中配置`"rules": {"可能错误类型":0/1/2/off/warning/error}`
>
>scoped属性：//添加在style标签上
>>作用：让本组件样式的作用域限制在本组件以及子组件的根元素上
>>原理：vue在解析到style标签时如果有scoped属性则会在本组件的所有标签上添加一个以v-data开头自动生成的特殊属性，并在选择器上添加一个具有特殊属性的交集选择器(属性选择器) 
>>深度选择器：
>>>写法：
>>>>1：原生css // `父元素 >>> 选中的元素`
>>>>2：less/scss // `::v-deep`
>>>
>>>原理：把特殊属性的交集选择器转移到其他元素上，不需要限制的选择器变为后代选择器
>
>插件：//自己或别人定义好了一套全局且完整功能的实现
>>开发插件：新建一个js文件配置`export default { install(Vue) { 全局配置 } }`
>>使用插件：引入js文件并`Vue.use(js文件)` //即可使用

##### NUXT：
>API的自动引入：
>>在 composables 目录下模块的同名导出会被自动引入
>>如果 API 嵌套在目录内，可以通过 index 模块导出
>
>组件的自动引入：
>>在 components 目录下的组件将被自动引入
>>如果组件嵌套在目录内，可以用驼峰式 `//components/user/avatar.vueUserAvatar`
>
>路由配置：(以在pages文件夹里定义文件的方式，index.vue为"/")
>>一级路由：定义*.vue文件 //路由名为*
>>
>>非一级级路由：定义同名的文件和文件夹，文件夹里定义子路由的文件，连同`<NuxtChild>`使用
>>
>>params传参：`users-[group]/[id].vue`，使用$route.params.group拿到
>>
>>meta创建：通过 `definePageMeta({a:1})` 设置当前路由的元信息
>
>布局系统：
>>基础布局：
>>>创建：layouts/custom.vue 布局，其中使用`<slot />`
>>>使用：`<NuxtLayout name="custom"> node </NuxtLayout>`
>>
>>默认全局布局：
>>>创建：layouts/default.vue 布局，其中使用`<slot />`
>>>使用：默认在`<NuxtPage />`上套一层使用
>>>如果某组件不需要可以配置`definePageMeta({ layout: false })`
>>>注意事项：如果默认布局和基础布局同时使用时请先关掉默认布局
>
>获取数据：
>>```
>>const { data: Ref, pending:Ref, refresh:(force:boolean)=>Promise, error?:any} =
>>    await useAsyncData("todos", () => $fetch("/api/***"),{ lazy: true, server: true, pick: [] }) ||
>>    await useFetch("/api/***", {lazy: true,server: true,pick: ["id", "name", "completed"]})
>>```
>>>lazy:true //是否在路由之后请求数据，默认为false
>>>server:true //是否在服务端请求数据，默认为true
>>>pick:["key"] //由于请求回来的数据会存放在页面的payload中，为了防止冗余需要修剪需要的字段	
>>>>注意pick只能在对象中修减
>>>
>>>tronsform(input){retrun input.data} //跟精细的去修剪数据
>
>共享状态：
>>基础：`const counter = useState("counter", () => 1)`
>>>注意：useState只允许在生命周期中使用
>
>插件机制：
>>在plugins目录创建`***-plugin.server.ts`或`***-plugin.lient.ts` //仅作用于服务端和客户端
>>>`import { defineNuxtPlugin } from "#app"`
>>>`export default defineNuxtPlugin((nuxtApp) => { provide: {hello: () => "huxitai"} })`
>>>>`nuxtApp.vueApp为vm`
>
>内置组件：
>>```
>><NuxtPage></NuxtPage> //类似于<router-view>
>><NuxtChild></NuxtChild> //二级及以下路由展示的地方
>><nuxt-link to=""></nuxt-link>//类似于<router-lint>
>><NuxtLayout name=" ">node</NuxtLayout> //类似于插槽
>>```

## TypeScript：

##### 描述：
>TypeScript是JavaScript的一个超集(扩展)，发展过程：JS(弱类型)ES6(严格模式)TS(强类型)，是由微软公司在JS的基础上建立的

##### 特点：
>1：起于JS归于JS(编译型)
>2：强类型
>3：健壮性强

##### 安装：
>npm install -g typescript

##### 编译TS：
>1：在当前项目根目录下使用node输入命令`tsc .\文件名.ts`
>2：`tsc .\文件名.ts -w` //监视ts变化自动编译，只能对当前文件
>3：命令行直接输入tsc编译全部ts文件，需要有tsconfig.json文件，可`tsc -w`监视所有文件
>4：webpack编译：
>>1)：`npm init -y` //初始化项目
>>2)：`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin` //下载依赖
>>3)：编写webpack.config.js的配置文件
>>4)：编写tsconfig.json的配置文件

##### tsconfig.json的配置：
>`include:["./src/**/*"]` //用来指定那些文件需要被编译
>>`**` //任意目录
>>`*` //任意文件
>
>exclude //和include相反，默认值为`["node_modules","bower_components","jspm_packages"]`
>
>extends //当配置比较复杂时可以继承一个json文件
>
>`files:[文件A,文件B]` //类似include，只是需要一个一个文件设置出来
>
>`compilerOptions:{}` //编译器的选项
>>`target:"ES5"` //指定被编译成ES的版本
>>`module:"ES6/commonjs"` //指定模块化的规范
>>`lib:["dom"]` //用来指定项目中需要使用到的库
>>`outDir:"./dist"` //用来指定编译后文件所在的位置
>>`outFile:"./dist/app.js"` //将全局作用域链中的代码合并成一个文件，注意冲突
>>`allowJs:false` //是否对JS文件进行编译，默认是false
>>`checkJs:false` //是否检查JS代码是否符合TS语法规范，默认是false
>>`removeComments:false` //是否编译注释，默认是false代表需要编译注释
>>`noEmit:true` //不生成编译后的文件，会执行编译的过程, 默认是false
>>`noEmitOnError:true` //检查语法，当有错误时不会编译，默认是false
>>`alwaysStrict:false` //设置编译后的JS文件是否使用严格模式
>>`noImpLicitAny:true` //不允许使用隐私的any类型
>>`noImpLicitThis:true` //不允许不明确类型的this
>>`strictNullChecks:true` //严格的查空值
>>`strict：false` //所有严格检查的总开关

##### 基础数据类型的类型注解：
>(所有的变量都要进行类型注解)

>1：**布尔：**`let bool: boolean = true`
>
>2：**数字：**`let num: Number = 123`
>
>3：**bigint：**`let big: bigint = 100n;`
>
>4：**字符串：**`let str: String = "123"`
>
>5：**undefined：**`let udf: undefined = undefined`
>
>6：**null：**`let nul: null = null`
>>undefined和null是两个数据类型，但是他们是所有的数据类型的子类型
>>所有的数据类型变量都可以赋值为他们两，反过来不行
>>undefined和null可以互相赋值
>
>7：**数组：**
>>```
>>let arr1: Number[] = [1, 2, 3]
>>let arr2: String[] = ["1", "2", "3"]
>>let arr3: Array<Number> = [1, 2, 3]
>>```
>
>8：**元组：** //固定类型固定个数的数组
>>`let tuple: [Number, String] = [1, "2"]`
>
>9：**枚举：** //让一些数据具有语义，属性和值互相赋值
>>`enum sortFlag {a = 1,b = 2}` // sortFlag[1]为a/ sortFlag.a为1
>
>10：**any：** //任意类型
>>```
>>let a: any = 1
>>let arr4: any[] = [1, "2", true]
>>```
>
>11：**object：** //非原始类型:除数字/字符串/布尔值之外的类型都属于非原始类型
>>`let obj: Object = { name: "zs" }`
>
>12：**void：** //无返回值，可return null
>>`function fn(a: String, b: Number): void {}`
>
>13：**never：** //表示永远不会返回结果
>
>14：**字面量：** //类似于常量(几乎不用)
>>`let a: 10`
>
>15：**unknown：** //表示未知类型，和any类似，区别在于any类型的变量可以赋值给其他任意类型，unknown不行
>
>16：**KeyboardEvent：**//键盘函数事件对象

##### 类型推断
>`let b = 1` //会推断出b为Number类型

##### 联合类型
>`let NumOrStr: Number | String = "1"`

##### 交叉类型
>`let and: {name:string}&{age:number}` //and对象必须有name和age

##### 类型断言 //用来告诉解释器的实际类型
>```
><string>a
>(a as string)
>```

##### 类型别名 
>`type myType = string`

##### 接口：
>(接口是用来给对象/函数做限定的，规范这个对象/函数)

>规范对象：
>>定义：`interface Iuser{ name:string }`
>>使用：`user:Iuser = { name:'赵丽颖' }`
>>简写：`let user : {name: string, [xxx:string]:any}; user = {name:'赵丽颖'}` //数据跟结构必须一样
>
>规范函数
>>定义：`interface Ifn{(a:string,b:string):string}`
>>使用：`let fn: Ifn = function(a: String, b: String): String {return a + "" + b}`
>>简写：`let fn: (a: String, b: String)=> String`
>
>规范类：//可以保障使用一个实例化对象的时候有其需要的方法，尽量分开定义增加灵活性
>>`class Person implements Igender,Iage{}` //一个类可以实现多个接口

##### TS里的类：
>跟JS语法差不多(封装、继承、多态)

##### 修饰符：
>用来描述类内部的属性/方法的特性

>`public` //默认值, 公开的类的内部外部都可以访问，子类的内部也能访问
>`private `//只能当前类内部可以访问
>`protected` //类内部和子类内部可以访问，类的外部不能访问
>`?` //代表可有可无
>`readonly` //只读

##### 存取器：
>(在类中定义，类似于JS的存取器)

>`get fullName():string{ return xxx }`
>`set fullName(val:string){}`

##### 抽象类：
>(一般都是作为基类，它不能实例化对象，只能让人继承，抽象方法不能实现，是让继承者去实现的)

>定义：`abstract class Person {}`

##### 抽象方法：
>(没有方法体，抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写)

>定义：`abstract 方法名():void`

##### 定义函数：
>声明式：`function myFn(a:string,b:string):string{}`
>表达式：`let myFn1 = function(a:string,b:string):string{}`
>表达式完整版：`let myFn2:(a:string,b:string) => string =  function(a:string,b:string):string{}`

##### 泛型：
>(指在定义函数/接口/类时不确定其需要的类型，在调用或使用的时候才能确定类型，这时就可以用到泛型，通常使用"K/T/V"表示)

>泛型函数：
>>定义：`function fn<T,V>(a:T,b:V):T{}`
>>使用：`fn<string,Number>('i',5)`
>
>泛型接口：
>>定义：`interface IbaseCRUD <T> {}`
>>使用：`class UserCRUD implements IbaseCRUD <Number> {}`
>
>泛型约束：`T extends 接口名`


## 移动端：
##### 像素：
>物理像素：设备出厂时固定的像素
>Css像素：web人员设置的像素
>设备独立像素：为了让物理像素更好的展现用户层的像素而出现的，是为了转化
>像素比(dpr)：物理像素/设备独立像素(让Css像素和物理像素扯上关系)，独立像素=css像素

##### 视口：
>布局视口：默认为980px，因为要兼容所有网页，所以压缩(压缩的是css面积，而不是大小)
>>优点：元素在不同设备上，呈现效果几乎一样
>>缺点：元素太小，用户体验不好
>
>视觉视口：宽度永远是屏幕宽度所包含的css像素值，是变化的
>
>理想视口：布局适口=视觉视口=理想视口=设备独立像素=375
>>配置：<`meta name="viewport" content="width=device-width />`
>>优点：页面清晰，用户体验好
>>缺点在不同的设备上，相同的元素会有不同的大小，需要做适配，会存在大元素问题
>
>完美视口：解决大元素兼容性问题
>>`<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />`
>
>系统缩放比例 =  设备独立像素 / 布局视口宽度
>
>最终的meta：`<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />`

##### 单位：
>`Px`：是绝对单位，所有单位的祖宗
>`%`：是相对单位，相对父级 
>`em`：是相对单位，1em=自身的字体大小
>`rem`：是相对单位，1rem=html标签的字体大小，默认16px

##### 适配：
>搜狗和唯品会的方案：
>>无论什么设备，什么设计稿，总宽度都设置为10rem，在设备中把总宽度/10赋值给html标签的字体大小。这样设计稿的总宽度也有了，总rem也有了就可以计算出1rem在设计稿中是多少px，通过设计稿中目标元素的px值/1rem的px值计算出xrem值，在设备中也是xrem值
>
>淘宝的方案
>>无论什么设备，什么设计稿，在设计稿中1rem都对应100px，然后通过总宽度计算出其总rem值。在设备中设置总宽度/其总rem值给html标签的字体大小。拿到目标元素的px值/100就可以得到其xrem值，然后设置给设备中

##### 移动端事件：
>touchstart //手指按下
>touchmove //手指移动
>touchend //手指离开
>
>手指列表伪数组：
>>changedTouches //目标元素目标事件上的手指列表(最终选择)
>>targetTouches //目标元素上的手指列表
>>touches //屏幕上的手指列表

##### 移动端最终工作：
>1、设置meta标签把视口拉为完美理想 
>2、采取适合的适配方式进行适配（rem适配）
>3、之前pc端的事件切换位移动端的事件
>4、移动的事件注意点击传透(阻止默认事件)

react框架移动端适配：
>1：安装postcss postcss-pxtorem
>2：在craco.config.js上配置：`module.exports = {style: {postcss: {plugins: [require("postcss-pxtorem")]}}}`
>3：使用postcss-pxtorem详细配置：
>>```
>>style: {
>>    postcss: {
>>      plugins: [
>>        require("postcss-pxtorem")({
>>          rootValue: 37.5,
>>          unitPrecision: 5,
>>          propList: ["font", "font-size", "line-height", "width", "height"],
>>          selectorBlackList: [],
>>          replace: true,
>>          mediaQuery: false,
>>          minPixelValue: 0,
>>          exclude: /node_modules/i,
>>        }),
>>      ],
>>    },
>>  },
>>```

## 小程序：
##### 文件介绍：
>`project.config.json`：项目的配置文件，自动生成，别管
>`sitemap.json`：反爬虫 
>`app.js`：App()必须在app.js中调用
>`app.json`：当前小程序应用的配置项
>`app.wxss`：当前小程序应用的全局css样式
>`pages`：页面相关的介绍
>`utils`：到时候自己封装

##### 点击事件：
>bindtap：会向上级冒泡
>catchtap：阻止冒泡

##### 事件对象：
>`event.target`：用户点击的目标元素
>`event.currentTarget`：被绑定事件的元素

##### 路由跳转：
>`wx.navigateTo`：跳转后久的页面不会卸载，不能跳tabBar
>`wx.redirectTo`：跳转后久的页面会卸载，不能跳tabBar
>`wx.reLaunch`：可以打开任意页面

##### 生命周期：
>onLoad：页面创建时执行，只会执行一次
>onShow：页面在前台显示的时候执行，会执行多次，初始化阶段执行一次  
>onReady：页面第一次渲染完成执行，只会执行一次
>onHide：页面在后台隐藏的时候执行，会执行多次 
>onUnload：页面销毁的时候执行，只会执行一次

##### 其他api：
>`wx.showToast({title: "xxx"})` //小程序的提示

##### 视频执行上下文：
>(用单例模式实现)

>1、data保存当前播放的视频id
>2、判断this身上是否存在上下文对象，
>>如果不存在代表第一次播放
>>>创建上下文对象
>>>播放开始
>>>存储当前播放的id在this
>>>存储播放状态在this
>>
>>如果存在代表以前播放过
>>>判断当前播放的id和data的id是否相同，
>>>>如果相同点的还是同一首
>>>>>判断播放状态切换播放和暂停，更改播放状态
>>>>
>>>>如果不同点的不是同一首
>>>>>先停止以前播放的音乐
>>>>>创建上下文对象
>>>>>播放开始
>>>>>存储当前播放的id在this
>>>>>存储播放状态在this

音频执行上下文同视频执行上下文

##### 上拉触底和下拉刷新：
>1：配置scroll-view的refresher-enabled为true
>2：当用户下拉时，需重新发请求获取列表数据，绑定bindrefresherrefresh事件进行其操作
>3：当用户下拉时，需出现标识（三个点），当数据请求成功，需要取消标识，下拉刷新标识refresher-triggered为true和false控制
>4：上拉触底，绑定bindscrolltolower事件进行其操作

##### 实现自定义转发：
>1：给点击的button添加`open-type = "share"`属性
>2：无论是按钮还是菜单转发 最终触发的都是页面的`onShareAppMessage(Object object)`


##### 小程序分包加载：
>(当程序体积大于2M时，微信小程序是不让上线的，这时需要用到分包加载，将程序分为一个主包和多个子包)

>分包分为以下三种：
>>1：使用分包(常规分包)
>>>使用：
>>>>1：改变分支：根目录->package->pages->页面组件
>>>>2：在app.json中配置`"subpackages": [{"root": "包根名","name":"包别名","pages": ["pages/index/index"]}]`
>>>
>>>特点：
>>>>1：除分包内容其余内容都会打包在主包中
>>>>2：tabBar页面不能打包在分包中
>>>>3：分包不能嵌套
>>>>4：分包只能使用自己或主包的资源
>>>>5：点击访问的分包时才会加载分包
>>>
>>>注意：配置完分包以后需挨个点击页面查看，有些路径会改变
>>
>>2：独立分包
>>>使用：在使用分包的"subpackages"中添加一个`"independent": true`
>>>
>>>特点：独立分包不用加载主包且不依赖主包资源
>>>
>>>注意：当依赖主包资源时需：
>>>>1：给分包拷贝一份资源
>>>>2：所有引入在分包内引入一次
>>>>3：页面比较独立时适合使用分包
>>
>>3：分包预下载
>>>使用：在使用分包的基础上在app.json中配置：
>>>>`"preloadRule": {"pages/index/index": {"network": "all","packages":["包别名"] }}` //当访问index页面时使用所有网络加载包别名的页面
>>>
>>>特点：提升进入后续分包页面时的启动速度。对于独立分包，也可以预下载主包

## Echarts：
>(一个基于 JavaScript 的开源可视化图表库)

>1：`npm i echarts@4 vue-echarts@5.0.0-beta.0` //下载依赖包
>
>2：在plugins/echarts.js中引入echarts：
>>```
>>import * as echarts from 'echarts'
>>import vueEcharts from 'vue-echarts'
>>Vue.prototype.$echarts = echarts
>>Vue.component('vueEcharts, vueEcharts)
>>```
>
>3：main.js中引入`import '@/plugins/chart'`
>
>4：echarts的使用：
>>原生：
>>>1：在绘图前我们需要为 ECharts 准备一个定义了高宽的 DOM 容器
>>>2：`myChart = echarts.init(DOM元素)` //初始化echarts实例
>>>3：`myChart.setOption(option)` //使用刚指定的配置项和数据显示图表
>>
>>vue-echarts：
>>>`<'vueEcharts :options=" options " autoresize/ >`
>>>>options：echarts的配置对象
>>>>autoresize让图标是响应式的

## Electron：
>(使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序)

##### 命令：
>`npx create-electron-app@latest my-app` //创捷electron项目
>`npm start` //启动项目
>`npm run make` //创建可执行文件

##### 主窗口API:
>`mainWindow.webContents.openDevTools()` //开启控制面板
>
>`new BrowserWindow({ options })` //创建一个窗口
>>`width:number` //窗口的宽度
>>`height:number` //窗口的高度
>>`webPreferences:{ options }` //配置浏览器相关的表现
>>>`nodeIntegration:true` //是否支持完整的node，默认false
>>>`webviewTag:true` //是否支持webview标签
>
>`mainWindow.loadFile("index.html")` //窗口需要加载的html文件，绝对路径

##### DialogAPI：
>`import {dialog} from "electron"`
>`dialog.showOpenDialog(option)` //打开一个选择文件的Dialog
>`dialog.showMessageBox(option)` //打开一个提示对话框	

##### electron原生AJAX请求
>1：
>```
>import {net} from "electron" //引入electron
>let request = net.reqeust("路径") //配置路劲
>request.on("response",(response)=>{response.on("data",(chunk)=>{})}) //请求和响应的配置
>```
>2：`request.end()` //配置结束发送请求

##### 标签：
>`<webview src="地址">` //在electron里嵌套另一个网页，可设置宽高
>>`webview.insertCSS("css样式")`
>>`webview.executeJavaScript("代码")`

##### node与web之间的通信：
>主进程订阅：
>>`ipcMain.on("事件名",(event,val)=>{})`
>>>`event.reply("回复名","回复消息")` //回复

##### 主进程发布：
>`窗口实例.webContents.send("事件名","val")`

##### 渲染进程订阅：
>`IpcRenderer.on("事件名",(event,val)=>{})`

##### 渲染进程发布：
>`IpcRenderer.send("事件名",val)`