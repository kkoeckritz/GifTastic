# GifTastic

Knowledge is sexy.

Life is a gif.

Now you can find both at once, with GifTastic.

Save your go-to topics for later, or try something completely new. GifTastic takes gifs to the next level.

</80s-900-number-commercial-voice>

  
## Want to see it in action?
[Check it out here](http://koec.io/GifTastic/ "Hosted by GitHub")


## Want to build it yourself?
Link to ./assets/javascript/app.js in a page of your choice, then make sure these elements

```html
<div class="app">
    <div id="app_add_topic">
        <form>
            <input type="text" name="add_topic" id="add_topic_text">
            <div class="tooltip">
                <span class="tooltiptext">HOVER over gifs to animate</span>
                <button type="submit" class="control_buttons" id="add_topic_button">Add Topic</button>
            </div>
        </form>
        <div class="tooltip">
            <span class="tooltiptext">load current topics on next visit</span>
            <button class="control_buttons" id="save_topics">Save</button>
        </div>
        <div class="tooltip">
            <span class="tooltiptext">reset topics and clear gifs</span>                    
            <button class="control_buttons" id="reset_topics">Clear</button>
        </div>
    </div>
    <br>
    <div id="app_buttons"></div> 

    <div id="app_wiki">
        <!-- <div id="wiki_logo"></div> -->
        <div id="wiki_text"></div>
        <p id="wiki_more">view more</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png" id="wiki_logo">
    </div>
    <div id="app_gifs"></div>
</div>
```
or equivalent are included in your page.

This webapp uses the [GIPHY](https://developers.giphy.com/docs/ "documentation") and [Wikimedia](https://www.mediawiki.org/wiki/REST_API "overview") APIs.
