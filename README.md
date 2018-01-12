# Every Day I'm Instagrammin!
A stupid simple and lightweight Jquery plugin (2kb - unminified) that snags and display Instagram pics : [everydayiminstagrammin.stephenscaff.com](http://everydayiminstagrammin.stephenscaff.com/)


## Token Generator
After you register at Instagram's dev portal, [Here is a handy token generator →](http://instagram.pixelunion.net/)


## Set It Up

```html
/*Call plugin on an unordered list class*/
<div class="js-instagrammin"></div>

```

Now just initialize it off your class, adding your account's clientID and Access Token.

```javascript
 $('.instagrammin').everydayImInstagrammin({
   clientID: 'your-client-id',
   accessToken: 'your-access-token',
   numberPics: '12',
 });

```


##Defaults / Options

| Option        			|      Description                  	|   Value
| :-------------			| :-------------------------------:   | :------------:
| clientID      			| Instagram api client ID          	  | string
| accessToken   			| Your instagram accessToken    			| string
| numberPics   				| Number of pics to show       				| int
| captions   					| Show captions?     					        | boolean



## Check it
Peep Every Day I'm Instagrammin' in action [Here→](http://everydayiminstagrammin.stephenscaff.com/),
