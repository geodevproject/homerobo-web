from flask import Flask, render_template, send_from_directory, jsonify, request, json
import redis

app = Flask(__name__, static_folder="static")

device_name = "KEL-E Droid"

'''
URL for reference: http://mattrichardson.com/Raspberry-Pi-Flask/index.html
'''


@app.route('/')
def index():
    email = {'email_address': '611jclass@geodevproject.com'}
    return render_template('login.html', title='Home', email=email)

@app.route('/controller')
def controller():
    user = {'username': '611jclass'}
    return render_template('controller.html', title='Home', user=user)

@app.route('/addtrain')
def add_train_form():
    user = {'username': '611jclass'}
    email = {'email_address': '611jclass@geodevproject.com'}
    return render_template('add_train.html', title='Add Train', email=email, user=user)

@app.route('/roundhouse')
def my_trains():
    user = {'username': '611jclass'}
    email = {'email_address': '611jclass@geodevproject.com'}

    train_json = {
        "train_profiles": [
            {
                "train_id": "0001",
                "train_make": "Norfolk and Western",
                "train_model": "J Class 611",
                "train_type": "Steam"
            },
            {
                "train_id": "0002",
                "train_make": "Norfolk and Western",
                "train_model": "J Class 633",
                "train_type": "Steam"
            }
        ]
    }

    train_profiles = train_json['train_profiles']
    print(train_profiles)

    return render_template('roundhouse.html', title='Add Train', email=email, user=user, trains=train_profiles)


@app.route('/processjson', methods=['GET'])
def processUserJson():
    jsonData = "static/data/train_profiles.json"
    data = request.get_json()
    return jsonData


#def home():
#    return send_from_directory('static', 'index2.html')


@app.route('/<path:path>')
def send_page(path):
    return send_from_directory('static', path)


@app.route("/api/engine/<action>")
def action(action):
    # speed = request.args['speed']

    # Send message to Redis Queue
    channel = "homerobo"

    #client = redis.Redis(host='54.227.58.150', port=6379, password='VozUvtV7V2TQ')
    client = redis.Redis(host='54.197.76.217', port=6379)
    client.publish(channel, action)

    # Save the status message to be passed into the template:
    message = str(action) + device_name  #MESSAGE NOT BEING PASSED AS JSON

    # Along with the pin dictionary, put the message into the template data dictionary:
    template_data = {
        'message': message
            }

    # return render_template('response.json', **templateData)
    return jsonify(template_data)


if __name__ == '__main__':
    # app.run(host='192.168.1.10', debug=True)
    #app.run(debug=True, ssl_context=('cert.pem', 'key.pem'))
    #app.run(debug=True)
    app.run(host= '0.0.0.0')