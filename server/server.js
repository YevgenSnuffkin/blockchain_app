const jsonServer = require('json-server');
const https = require('https');
const statistics = require('blockchain.info/statistics')


const middlewares = jsonServer.defaults();

const server = jsonServer.create();

const last_time = 'minutes_between_blocks'

const average_time = 'https://blockchain.info/q/interval'


server.get('/last', (req, res) => {
  statistics.get({stat:last_time}).then(response => {
    console.log(response);
    res.send({
      'last_data': response
    });
  });
});

server.get('/chart', (req, res) => {
  statistics.getChartData('median-confirmation-time', {timespan:'30d'}).then(response => {
    console.log(response);
    res.send({
      'chart_data': response
    });
  });
});


server.get('/timeminutes', (req, response) => {
  https.get(average_time, res => {
  res.setEncoding('utf8');
  let body = "";
  res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
        
        time_sec = JSON.parse(body);
        time_min = time_sec/60;
        console.log(time_min);
        response.send({
          'data': time_min
        });  
    });
  });

});

server.listen(8000, () => {
  console.log('JSON Server is running');
});