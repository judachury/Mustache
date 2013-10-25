/** TEMPLATES **/

var Juan = {};

Juan.template = {
	database: '<table>'	
					+'<thead>'
						+'<tr>'
							+'<th>'
								+'{{th1}}'
							+'</th>'
							+'<th>'
								+'{{th2}}'
							+'</th>'
						+'<tr>'
					+'</thead>'
					+'<tbody>'
						+'{{#person}}'
						+'<tr>'
							+'<td>'
								+'{{name}}'
							+'</td>'
							+'<td>'
								+'{{occupation}}'
							+'</td>'
						+'<tr>'
						+'{{/person}}'
					+'</tbody>'
				+'</table>'


}