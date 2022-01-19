// template
const aTemplate = require('./pages/자유.hbs')
const bTemplate = require('./pages/비밀.hbs')
const cTemplate = require('./pages/정보.hbs')
const dTemplate = require('./pages/홍보.hbs')
const eTemplate = require('./pages/SW.hbs')
const homeTemplate = require('./pages/home.hbs')
const loginTemplate = require('./pages/login.hbs')
const signupTemplate = require('./pages/signup.hbs')
const fTemplate = require('./pages/write.hbs')
const gTemplate = require('./pages/read.hbs')

const Home = homeTemplate()
const a= aTemplate()
const b = bTemplate()
const c = cTemplate()
const d = dTemplate()
const e = eTemplate()
const login = loginTemplate()
const signup = signupTemplate()
const f = fTemplate()
const g = gTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/자유': a,
  '/비밀': b,
  '/정보': c,
  '/홍보': d,
  '/SW': e,
  '/login': login,
  '/signup': signup,
  '/write': f,
  '/read' : g
}

//sql 연결 라우터
/*var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
 
 router.get('/list/:page', function(req, res, next) {
    var page = req.params.page;
    var sql = "select idx, name, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {title: '게시판 리스트', rows: rows});
    });
});
module.exports = router;*/

// entry point
function initialRoutes (el) {
  renderHTML(el, routes['/'])
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname])
  }

// set browser history
function historyRouterPush (pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName)
  renderHTML(el, routes[pathName])
}

// render
function renderHTML (el, route) {
  el.innerHTML = route
}

module.exports = {
  initialRoutes,
  historyRouterPush
} 

