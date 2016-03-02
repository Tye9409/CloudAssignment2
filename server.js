var express = require('express');
var fs = require('fs');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var router = express.Router();
var converter = require('json-2-csv');
var io = require('socket.io');
var server = require('http').createServer(app);
var socket = io.listen(server);
var geoip = require('geoip-lite');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/prices', function(req, res) {



	//gunna scrape from gasbuddy

	// var count = 0
 //    socket.on('connect', function() {
	//     count++;
	//     // client.on('disconnect', function(){
	//     //     count--;
	//     // })
	// })
	// console.log('The COUNT is: ' + count);



	url = 'http://www.torontogasprices.com/Oshawa/index.aspx';

	//first param is url
	//callback takes 3 params, error response code, html

	request(url, function(error, response, html) {

		//check for errors during request
		if(!error) {
			var $ = cheerio.load(html);

			var $$ = cheerio.load(html)('div.sp_p');

			var price = [], company = [], address = [], area = [];
			var json = { price : "", company : "", address : "", area : ""};

			var price0 = ($$[0].children[0].attribs.class + $$[0].children[1].attribs.class + $$[0].children[2].attribs.class + $$[0].children[3].attribs.class);
			var price0trim = price0.replace(/p/g,"").replace(/d/g,".")
			price.push(price0trim);

			var price1 = ($$[1].children[0].attribs.class + $$[1].children[1].attribs.class + $$[1].children[2].attribs.class + $$[1].children[3].attribs.class);
			var price1trim = price1.replace(/p/g,"").replace(/d/g,".")
			price.push(price1trim);

			var price2 = ($$[2].children[0].attribs.class + $$[2].children[1].attribs.class + $$[2].children[2].attribs.class + $$[2].children[3].attribs.class);
			var price2trim = price2.replace(/p/g,"").replace(/d/g,".")
			price.push(price2trim);

			var price3 = ($$[3].children[0].attribs.class + $$[3].children[1].attribs.class + $$[3].children[2].attribs.class + $$[3].children[3].attribs.class);
			var price3trim = price3.replace(/p/g,"").replace(/d/g,".")
			price.push(price3trim);

			var price4 = ($$[4].children[0].attribs.class + $$[4].children[1].attribs.class + $$[4].children[2].attribs.class + $$[4].children[3].attribs.class);
			var price4trim = price4.replace(/p/g,"").replace(/d/g,".")
			price.push(price4trim);

			var price5 = ($$[5].children[0].attribs.class + $$[5].children[1].attribs.class + $$[5].children[2].attribs.class + $$[5].children[3].attribs.class);
			var price5trim = price5.replace(/p/g,"").replace(/d/g,".")
			price.push(price5trim);

			var price6 = ($$[6].children[0].attribs.class + $$[6].children[1].attribs.class + $$[6].children[2].attribs.class + $$[6].children[3].attribs.class);
			var price6trim = price6.replace(/p/g,"").replace(/d/g,".")
			price.push(price6trim);

			var price7 = ($$[7].children[0].attribs.class + $$[7].children[1].attribs.class + $$[7].children[2].attribs.class + $$[7].children[3].attribs.class);
			var price7trim = price7.replace(/p/g,"").replace(/d/g,".")
			price.push(price7trim);

			var price8 = ($$[8].children[0].attribs.class + $$[8].children[1].attribs.class + $$[8].children[2].attribs.class + $$[8].children[3].attribs.class);
			var price8trim = price8.replace(/p/g,"").replace(/d/g,".")
			price.push(price8trim);

			var price9 = ($$[9].children[0].attribs.class + $$[9].children[1].attribs.class + $$[9].children[2].attribs.class + $$[9].children[3].attribs.class);
			var price9trim = price9.replace(/p/g,"").replace(/d/g,".")
			price.push(price9trim);

			var price10 = ($$[10].children[0].attribs.class + $$[10].children[1].attribs.class + $$[10].children[2].attribs.class + $$[10].children[3].attribs.class);
			var price10trim = price10.replace(/p/g,"").replace(/d/g,".")
			price.push(price10trim);

			var price11 = ($$[11].children[0].attribs.class + $$[11].children[1].attribs.class + $$[11].children[2].attribs.class + $$[11].children[3].attribs.class);
			var price11trim = price11.replace(/p/g,"").replace(/d/g,".")
			price.push(price11trim);

			var price12 = ($$[12].children[0].attribs.class + $$[12].children[1].attribs.class + $$[12].children[2].attribs.class + $$[12].children[3].attribs.class);
			var price12trim = price12.replace(/p/g,"").replace(/d/g,".")
			price.push(price12trim);

			var price13 = ($$[13].children[0].attribs.class + $$[13].children[1].attribs.class + $$[13].children[2].attribs.class + $$[13].children[3].attribs.class);
			var price13trim = price13.replace(/p/g,"").replace(/d/g,".")
			price.push(price13trim);

			var price14 = ($$[14].children[0].attribs.class + $$[14].children[1].attribs.class + $$[14].children[2].attribs.class + $$[14].children[3].attribs.class);
			var price14trim = price14.replace(/p/g,"").replace(/d/g,".")
			price.push(price14trim);

			var price15 = ($$[15].children[0].attribs.class + $$[15].children[1].attribs.class + $$[15].children[2].attribs.class + $$[15].children[3].attribs.class);
			var price15trim = price15.replace(/p/g,"").replace(/d/g,".")
			price.push(price15trim);

			var price16 = ($$[16].children[0].attribs.class + $$[16].children[1].attribs.class + $$[16].children[2].attribs.class + $$[16].children[3].attribs.class);
			var price16trim = price16.replace(/p/g,"").replace(/d/g,".")
			price.push(price16trim);

			var price17 = ($$[17].children[0].attribs.class + $$[17].children[1].attribs.class + $$[17].children[2].attribs.class + $$[17].children[3].attribs.class);
			var price17trim = price17.replace(/p/g,"").replace(/d/g,".")
			price.push(price17trim);

			var price18 = ($$[18].children[0].attribs.class + $$[18].children[1].attribs.class + $$[18].children[2].attribs.class + $$[18].children[3].attribs.class);
			var price18trim = price18.replace(/p/g,"").replace(/d/g,".")
			price.push(price18trim);

			var price19 = ($$[19].children[0].attribs.class + $$[19].children[1].attribs.class + $$[19].children[2].attribs.class + $$[19].children[3].attribs.class);
			var price19trim = price19.replace(/p/g,"").replace(/d/g,".")
			price.push(price19trim);

			var price20 = ($$[20].children[0].attribs.class + $$[20].children[1].attribs.class + $$[20].children[2].attribs.class + $$[20].children[3].attribs.class);
			var price20trim = price20.replace(/p/g,"").replace(/d/g,".")
			price.push(price20trim);

			var price21 = ($$[21].children[0].attribs.class + $$[21].children[1].attribs.class + $$[21].children[2].attribs.class + $$[21].children[3].attribs.class);
			var price21trim = price21.replace(/p/g,"").replace(/d/g,".")
			price.push(price21trim);

			var price22 = ($$[22].children[0].attribs.class + $$[22].children[1].attribs.class + $$[22].children[2].attribs.class + $$[22].children[3].attribs.class);
			var price22trim = price22.replace(/p/g,"").replace(/d/g,".")
			price.push(price22trim);



			json.price = price;
			// console.log(price0trim);
			// console.log(price1trim);
			// console.log(price2trim);
			// console.log(price3trim);
			// console.log(price4trim);
			// console.log(price5trim);
			// console.log(price6trim);
			// console.log(price7trim);
			// console.log(price8trim);
			// console.log(price9trim);
			// console.log(price10trim);
			// console.log(price11trim);
			// console.log(price12trim);
			// console.log(price13trim);
			// console.log(price14trim);
			// console.log(price15trim);
			// console.log(price16trim);
			// console.log(price17trim);
			// console.log(price18trim);
			// console.log(price19trim);
			// console.log(price20trim);
			// console.log(price21trim);
			// console.log(price22trim);
			

			//address in different section, new jquery filter needed
			$('.address').filter(function() {

				var data = $(this);

				//no traversal needed
				companyData = data.children().first().text().trim();
				company.push(companyData);
				//console.log(company);


				var addressData = data.find('dd').first().text();
				address.push(addressData);
				//console.log(address);


				//send to json object
				json.company = company; 
				json.address = address;
			})


			//area in different section, new jquery filter needed
			$('.p_area').filter(function() {

				var data = $(this);

				//no traversal needed
				areaData = data.text();

				area.push(areaData);

				//console.log(area);

				//send to json object
				json.area = area; 
			})
		}

		//convert json into better format, each price, company, address and area is paired
		//with their respective values, rather than all separate

		var newjson = [];
		for(var i = 0; i < json.price.length; i++) {
			var newnewjson = {};
			newnewjson.price = json.price[i];
			newnewjson.company = json.company[i];
			newnewjson.address = json.address[i];
			newnewjson.area = json.area[i];
			newjson.push(newnewjson);
		}
		//console.log(newjson);
		res.send(newjson);

		fs.writeFile('output.json', JSON.stringify(newjson, null, 4), function(err) {
			console.log('File successfully written - check for output.json');
		})

		//message indicating no UI for now
		// res.send(
		// 	json.price[0] + " | " + json.company[0] + " | " + json.address[0] + " | " + json.area[0] + '<br>' 
		// 	+ json.price[1] + " | " + json.company[1] + " | " + json.address[1] + " | " + json.area[1] + '<br>'
		// 	+ json.price[2] + " | " + json.company[2] + " | " + json.address[2] + " | " + json.area[2] + '<br>'
		// 	+ json.price[3] + " | " + json.company[3] + " | " + json.address[3] + " | " + json.area[3] + '<br>'
		// 	+ json.price[4] + " | " + json.company[4] + " | " + json.address[4] + " | " + json.area[4] + '<br>'
		// 	+ json.price[5] + " | " + json.company[5] + " | " + json.address[5] + " | " + json.area[5] + '<br>'
		// 	+ json.price[6] + " | " + json.company[6] + " | " + json.address[6] + " | " + json.area[6] + '<br>'
		// 	+ json.price[7] + " | " + json.company[7] + " | " + json.address[7] + " | " + json.area[7] + '<br>'
		// 	+ json.price[8] + " | " + json.company[8] + " | " + json.address[8] + " | " + json.area[8] + '<br>'
		// 	+ json.price[9] + " | " + json.company[9] + " | " + json.address[9] + " | " + json.area[9] + '<br>'
		// 	+ json.price[10] + " | " + json.company[10] + " | " + json.address[10] + " | " + json.area[10] + '<br>'
		// 	+ json.price[11] + " | " + json.company[11] + " | " + json.address[11] + " | " + json.area[11] + '<br>'
		// 	+ json.price[12] + " | " + json.company[12] + " | " + json.address[12] + " | " + json.area[12] + '<br>'
		// 	+ json.price[13] + " | " + json.company[13] + " | " + json.address[13] + " | " + json.area[13] + '<br>'
		// 	+ json.price[14] + " | " + json.company[14] + " | " + json.address[14] + " | " + json.area[14] + '<br>'
		// 	 );


		// //////////////////////////////COUCHDB////////////////////////////////////////////////

		var nano = require('nano')('http://localhost:5984');

		// // create a new database
	    nano.db.create('gasprices', function() {
	      // specify the database name
		    var gasprices = nano.use('gasprices');
		    // and insert users names who have accessed system into couchDB
		    //var dbjson = JSON.stringify(newjson, null, 4);
		    gasprices.insert(json, function(err, body, header) {
		      if (err) {
		        console.log('[gasprices.insert] ', err.message);
		        return;
		      }
		      console.log('you have inserted the gas pricing information for Location: Oshawa.')
		      console.log(body);
	        });
	    });

	});

})

app.get('/', function(req,res) {
	res.render('index');
})

app.get('/bastard', function(req,res) {
	
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(ip);

	var geo = geoip.lookup("174.91.133.202");
	//console.log(geo);

	url = 'http://localhost:8081/api/prices';

	request(url, function(error, response, html) {
		if(!error) {
			newjson = JSON.parse(response.body);
			// console.log(response.body);
			res.render('table', {gasinfo: newjson, geo: geo});
			console.log(newjson.length);
			console.log(geo);

		}
	});
})

app.listen('8081');

console.log('scraper listening on port 8081');

module.exports = router;