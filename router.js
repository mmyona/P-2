// template
const chatTemplate = require('./static/pages/chat.hbs')
const homeTemplate = require('./static/pages/home.hbs')
const loginTemplate = require('./static/pages/login.hbs')
const loca1Template = require('./static/pages/loca_1.hbs')
const loca2Template = require('./static/pages/loca_2.hbs')
const loca3Template = require('./static/pages/loca_3.hbs')

const chat = chatTemplate()
const Home = homeTemplate()
const loca1 = loca1Template()
const loca2 = loca2Template()
const loca3 = loca3Template()
const login = loginTemplate()

const routes = {
  '/': Home,
  '/home': Home,
  '/login': login,
  '/chat' : chat,
  '/loca1':loca1,
  '/loca2':loca2,
  '/loca3':loca3
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

