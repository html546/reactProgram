
### 使用范例1
```javascript
    import React, { Component } from "react";
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";

    class Hello extends Component {
        render() {
            return (
            <Router>
                <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                </div>
            </Router>
            );
        }
    }

    export default Hello;

```

### 路由配置

1. BrowserRouter VS HashRouter
    - 都是路由的基本组件,需将其放在最外层,选其一使用
    - 内部只能含有一个子节点
    - BrowserRouter的URL是指向真实URL的资源路径,页面和浏览器的history保持一致
    - HashRouter使用URL中的hash(#)部分去创建路由
  

2.  `<Route/>`讲解
    - 匹配路径、挂载组件
    - exact:严格匹配
    - path:字符串类型,用来匹配url
    - component:值是一个组件,在path匹配成功后挂载这个组件
    - render:一个返回组件的方法
    - children:一个返回组件的方法

3. `<Switch>...</Switch>`讲解
    -  只会挂载与`<Route>`路径匹配成功的第一个 
    -  子节点只能是`<Route>`或`<Redirect>`
    -  使用范例


          ```javascript
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/:user" component={User} />
                    <Route component={NoMatch} />
                <Switch>
        ```
4. `<Link to= "..." >...</Link>`
    - to：string

    ```javascript
        <Link to="/home">Home</Link>
    ```

    - to：object

    ```javascript
        <Link to={{
            pathname:'/course'
            search:"?sort=name",
            hash:"#the-hash",
            state:{id:1}
            <!-- 传到组件的数据，通过this.props.location.state获取 -->
        }}>Courses</Link>
    ```

5. `<NavLink to="...">...</NavLink>`

    - NavLink是Link的子类
    - activeClassName:string,被选中时添加的类名
    - activeStyle:object,被选中时添加的行内样式
    - exact:boolean,严格匹配