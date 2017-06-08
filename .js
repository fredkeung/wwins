<script type="text/javascript">var submitted=false;</script>
<script type="text/javascript">
function frederic(s1,s2){
 var s1 = document.getElementById(s1);
 var s2 = document.getElementById(s2);
 s2.innerHTML = ""
 if(s1.value == "BMW"){
  var optionArray = ["|","116IA|116IA","323IA|323IA","X1 SDRIVE20IA|X1 SDRIVE20IA"];
 } else if(s1.value == "Toyota"){
  var optionArray = ["|","Camry|Camry","Echo|Echo","Ractis|Ractis"];
 } else if(s1.value == "Honda"){
  var optionArray = ["|","Civic|Civic","Jazz|Jazz","Stepwgn|Stepwgn"];
 }
 for(var option in optionArray){
  var pair = optionArray[option].split("|");
  var newOption = document.createElement("option");
  newOption.value = pair[0];
  newOption.innerHTML = pair[1];
  s2.options.add(newOption);
 }
}
</script>
