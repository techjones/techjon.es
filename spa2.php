<!DOCTYPE html><html>
<head>
    <meta charset="utf-8">
    <link href="spa2.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <title>newzapp</title>
</head>
<body>
	<header>newzapp</header>
	<nav>
	</nav>	
        <section></section>
        <div id="content">
		<section id="leftsection">
			
			<h1><p id="h1p">New Headlines</p>
			</h1><br>
			<div id="red">
			<?php

require_once("src/phapper.php");
$r = new \Phapper\Phapper();

$ts=$r->getNew($subreddit="worldnews", $limit = 8, $after = null, $before = null);

$vs0=$ts->data->children[0]->data->url;
$vs1=$ts->data->children[1]->data->url;
$vs2=$ts->data->children[2]->data->url;
$vs3=$ts->data->children[3]->data->url;
$vs4=$ts->data->children[4]->data->url;
$vs5=$ts->data->children[5]->data->url;
$vs6=$ts->data->children[6]->data->url;
$vs7=$ts->data->children[7]->data->url;
echo"<ul>";
echo"<li>";
print_r($ts->data->children[0]->data->title."<br>");
echo"<a href='$vs0'target=”_blank”>".$vs0."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[1]->data->title."<br>");
echo"<a href='$vs1'target=”_blank”>".$vs1."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[2]->data->title."<br>");
echo"<a href='$vs2'target=”_blank”>".$vs2."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[3]->data->title."<br>");
echo"<a href='$vs3'target=”_blank”>".$vs3."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[4]->data->title."<br>");
echo"<a href='$vs4'target=”_blank”>".$vs4."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[5]->data->title."<br>");
echo"<a href='$vs5'target=”_blank”>".$vs5."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[6]->data->title."<br>");
echo"<a href='$vs6'target=”_blank”>".$vs6."</a>"."<br><br>";
echo"</li>";
echo"<li>";
print_r($ts->data->children[7]->data->title."<br>");
echo"<a href='$vs7'target=”_blank”>".$vs7."</a>"."<br><br>";
echo"</li>";
echo"</ul>";
?>

			        		        		  			</div>
				<div id="twit">
				<?php


require_once('TwitterAPIExchange.php');
require_once('TwitterTextFormatter.php');
use Netgloo\TwitterTextFormatter;

$settings = array(
  'oauth_access_token' => "4730005967-PfSMWoOCDgF0T8G2CgKl6nu4wH785vfnQTzGW5W",
    'oauth_access_token_secret' => "9b3BeYmQjYVc7voQSqqGr3fKIT30mUAtLEoG6BiZQdrRN",
    'consumer_key' => "RMDcGcbHDOfMflW9ogZMuxDUK",
    'consumer_secret' => "g599UdH5L2IoWPWpf2OfoQmpt66VwntQLyuhv21IB9QQvINtTr"
);

$screen_name = 'tfj963';

$url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
$getfield = "?screen_name={$screen_name}&count=9";
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$user_timeline = $twitter
  ->setGetfield($getfield)
  ->buildOauth($url, $requestMethod)
  ->performRequest();

$user_timeline = json_decode($user_timeline);

echo "<ul>";
foreach ($user_timeline as $user_tweet) {
  echo "<li>";
  echo TwitterTextFormatter::format_text($user_tweet) . "<br/>";

  if (isset($user_tweet->entities->media)) {
    $media_url = $user_tweet->entities->media[0]->media_url;
    echo "<img src='{$media_url}' width='150px' />";
  }

  echo "</li>";
}
echo "</ul>";

?></div><br><div id="top"><h2><p id="h2p">Top Stories</p></h2><br>
<div id="top1">
              
              <?php
 $ts2=$r->getTop($subreddit = "news", $time = "hour", $limit = 3, $after = null, $before = null);
$bs=$ts2->data->children[0]->data->url;
$bs1=$ts2->data->children[1]->data->url;
$bs2=$ts2->data->children[2]->data->url;

   print_r($ts2->data->children[0]->data->title."<br>");
echo"<a href='$bs'target=”_blank”>".$bs."</a>"."<br><br>";
print_r($ts2->data->children[1]->data->title."<br>");
echo"<a href='$bs1'target=”_blank”>".$bs1."</a>"."<br><br>";


print_r($ts2->data->children[2]->data->title."<br>");
echo"<a href='$bs2'target=”_blank”>".$bs2."</a>"."<br><br>";

?> <br>
<?php 

$ts3=$r->getTop($subreddit = "worldnews", $time = "hour", $limit = 3, $after = null, $before = null);
 
  $cs0=$ts3->data->children[0]->data->url;
$cs1=$ts3->data->children[1]->data->url;
$cs2=$ts3->data->children[2]->data->url;
print_r($ts3->data->children[0]->data->title."<br>");
echo"<a href='$cs0'target=”_blank”>".$cs0."</a>"."<br><br>";

print_r($ts3->data->children[1]->data->title."<br>");
echo"<a href='$cs1'target=”_blank”>".$cs1."</a>"."<br><br>";

print_r($ts3->data->children[2]->data->title."<br>");
echo"<a href='$cs2'target=”_blank”>".$cs2."</a>"."<br><br>"; 

$ts4=$r->getTop($subreddit = "politics", $time = "hour", $limit = 2, $after = null, $before = null);
  $ds0=$ts4->data->children[0]->data->url;
$ds1=$ts4->data->children[1]->data->url;
 echo "<ul>";
echo "<li>";
print_r($ts4->data->children[1]->data->title."<br>");
echo"<a href='$ds1'target=”_blank”>".$ds1."</a>"."<br>";
 
echo "</li>";
echo "<li>";
print_r($ts4->data->children[0]->data->title."<br>");
echo"<a href='$ds0'target=”_blank”>".$ds0."</a>"."<br>";  
echo "</li>";

echo "</ul>";
   
    ?>
    </div>

<button id="mybtn4" onclick="newz4()">clik dis</button>
<button id="mybtn5" onclick="newz5()">clik dis</button>
<button id="mybtn6" onclick="newz6()">clik dis</button><br>
</div>

				</section>

			<section id="rightsection"><h3>Media</h3>
			<div id="rightbox"></div>
			<br><button id="mybtn" onclick="mybtn()">clik dis</button><button id="mybtn2" onclick="mybtn2()">clik dis</button><button id="mybtn3" onclick="mybtn3()">clik dis</button>
			       <br><br><div id="yup">		
			<h4></h4>
			<li><a href="http://www.reuters.com/tools/rss"target="_blank"title="rooters Feeds">Rootahs</a></li>
			<li><a href="http://hosted2.ap.org/APDEFAULT/APNewsFeeds"target="_blank"title="rsses">AyeP RSS</a></li>
								<li><a href="http://news.yahoo.com/"target="_blank"title="yahoo nooz">Yahoo News</a></li>
			<li><a href="http://www.newseum.org/todaysfrontpages/"target="_blank"title="front pages Feeds">Local Newzz</a></li>					 
                        <li><a href="http://www.w3schools.com/colors/colors_names.asp"target="_blank"title="css colors">CSS Colors</a></li>
			<li><a href="https://developer.mozilla.org/en-US/" title="firefox" target=”_blank”>Mozilla DevNet</a></li>
			<li><a href="http://stackoverflow.com/" target="_blank">Stack Overflow</a></li>
			<li><a href="https://github.com/techjones" target=”_blank”>Muh Git | Techjones</a></li>
			<li><a href="http://www.reddit.com/r/webdev/" title="reddit" target=”_blank”>Reddit Web Dev</a></li>
			</div>
			       <br><div id="count"><script> if (!localStorage.pageLoadCount)
        localStorage.pageLoadCount = 0;
        localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;
        document.getElementById('count').textContent = "u have seent dis page "+localStorage.pageLoadCount+" times";
        
        </script></div>
			       <br><br>
			
            <div id="doos"title="how do u feels"><h4>feelzapp</h4> how do joo feel rn?
 
<canvas id="mycanny" width="200" height="100"></canvas>
<br>
<button onclick="canv()" title="emo"id="fb">0</button>
<button onclick="canv1()"title="aroused"id="fb1">0</button>
<button onclick="canv2()"title="stressed"id="fb2">0</button>
<button onclick="canv3()"title="normal"id="fb3">0</button>
<button onclick="canv4()"title="tired"id="fb4">0</button>
<button onclick="canv5()"title="happy"id="fb5">0</button>
<button onclick="canv6()"title="sad"id="fb6">0</button>
<button onclick="canv7()"title="peaceful"id="fb7">0</button><br>
<div id="feels"></div>

</div>
			</div>  </section>
	</div>
	<footer>
		<br>
	</footer>
	<script type="text/javascript" src="spa2.js"></script>
</body>
</html>