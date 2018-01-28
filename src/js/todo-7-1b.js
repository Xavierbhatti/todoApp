// import {addListItem as addItems, removeListItem as removeItems} from './fun';
// import $ from 'jquery';
import List from './fun'
import 'bootstrap';
import $ from 'jquery';
import '../css/styles.scss';

$(document).ready(function(){

	console.log(`Loading.....`);

	// var addItems = require('./fun');
	var listItems = [];
	var list = new List();
	
	$('form').on('submit', formCb);
	
	function formCb(event) {
		event.preventDefault();
		var itemValue = $('#listItemInput').val();
		var itemObj = {itemValue: itemValue, completed: false};
		$('#listItemInput').val('');
		list.addListItem(itemObj, listItems);
	}	
});