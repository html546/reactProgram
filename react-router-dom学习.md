
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