# Every Day I'm Instagrammin!
A little Jquery plugin (4kb - unminified) that snags and display Instagram pics by User or HashTag, with some caption styles.. See it in action at: [everydayiminstagrammin.stephenscaff.com](http://everydayiminstagrammin.stephenscaff.com)


## Wait, Another Freakin' Instagram Plugin?
Ha... yeps. Of course there is no shortage a handy Instagram plugins, so Every Day I'm Instagrammin' places an emphasis on being a slim and simple solution, easy peasy to drop in your project on the ready-to-rock tip.


## How's it Work Then?
Since Instagram's API uses the OAUTH 2.0 protocol, you'll need to snag the client ID for you account and generate an Access Token.


## Not Sure How To That?
Well, you can go register an Instagram client over at Instagram's dev portal, or just use this handy little tool [Here→]("http://www.pinceladasdaweb.com.br/instagram/access-token/)


## Let's Set It Up
The plugin outputs your feed's images as list items, so first set up an unordered list with a unique class. By defulat, the image output with the class name `.everyday-img`, but you can define your own image class like so `imgClass: 'insta-img'`. The actual list items output with the class everyday-item.


```html
/*Call plugin on an unordered list class*/
<ul class="instagrammin"></ul>
 
```

Now just initialize it off your class, adding your account's clientID and Access Token. 

```javascript
 $('.instagrammin').everydayImInstagrammin({
   clientID: '472977947',
   accessToken: '300619084.817864a.ccc422467e254e0a81d79e58e13b9410',
   urlType: InstaUser,
   numberPics: '12',
   imgClass: 'insta-img',
   captions: 'true',
   captionAlign: 'bottom',
 });
  
```

## By You Or By Tag
By default, EveryDay drops pics from your dope-ass feed. But, wait... there's more! Drop pics by hashtag by via option `InstaType: 'byHash'`, then set your desired hashtag `hashTag: 'httpster'`.

## How About Some Captions?
Gotcha covered. Just set the option captions: 'True' and the pic's captions will appear via a simple hover overlay. The overlay can be styled with css and the caption themselves can be aligned via `captionAlign: 'top'` and `captionAlign: 'bottom'`. Not a fan of using js for styling unless it's unavoidable, so I've included the minimum styles required for the caption hovers. Of course, you can easily alter to best suit your use.

## Anything Else
Um... how about a sexy-ass sequence fade in, one image at a time? Just set the option sequenceFadeIn: 'true' then define the duration `sequenceDuration: '250'`



##Defaults / Options

| Option        			|      Description                  	|   Value 
| :-------------			| :-------------------------------:  | :------------:
| clientID      			| Instagram api client ID          	 | null 
| accessToken   			| Your instagram accessToken    					| null
| InstaType     			| Show Pics by byUser or byHash  				| byUser  
| hashTag      	 		| Selects hashtag for byHash  			  		|	null
| numberPics   				| Number of pics to show       						| 12
| imgClass  							| Defines class for images       			 | '.everyday-img'
| captions   						| Number of pics to show     					   | 2000
| captionsAlign  		| Align captions to 'top' or 'bottom | bottom
| sequenceDuration	| Duration of sequence fade ins   			| 220


## Check it 
Peep Every Day I'm Instagrammin' in action [Here→](http://everydayiminstagrammin.stephenscaff.com/), 

## Demo Docs
I've added some docs to demo set up with basic options and required styles. But, you'll still need to add your access token and client id where indicated at the bottom of demo.html.