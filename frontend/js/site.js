$.getJSON('/data',function(d){
    alert(JSON.stringify(d));
    $('#name').text(d.name);
    $('#clg').text(d.clg);
    $('#regno').text(d.regno);
})