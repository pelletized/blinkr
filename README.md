```
  _         _       _              _             
 | |__     | |     (_)    _ _     | |__     _ _  
 | '_ \    | |     | |   | ' \    | / /    | '_| 
 |_.__/   _|_|_   _|_|_  |_||_|   |_\_\   _|_|_  
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 
```

blinkr
======

blinkr is a tiny jquery plugin that allows you to make any element you choose blink on screen, much like the old `<blink>` tag used to. 

How to use
----------

After linking to your version of jquery, simply select the element you would like to blink, like so: 
```sh
$('.blink').blinkr();
```

The default blinking speed is set at 800ms, but it's easy to change that if you wish, like so:
```sh
$('.blink').blinkr({
  speed : 1000 
});
```
