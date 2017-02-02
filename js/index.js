$(function() 
{
	$('#pagination-demo').twbsPagination(
	{
		totalPages: 584,
        visiblePages: 10,
        onPageClick: function (event, page)
        {
        	var company=$("#search_company").val();
        	 if(company.trim()!=""){
				$.ajax(
				{
					url:"https://api.github.com/search/repositories?q="+company+"&page="+page+"&per_page=10",
					success:function(response)
					{
						document.getElementById("list").innerHTML= "";
						console.log("Pagination");
						var data=response.items;
						$.each(data, function(index,value)
						{
							var list=`<div class="result"><li class="media" style="list-style:none; padding:5px;"><img src="img/head.jpg" class="d-flex mr-3"  style="float:left;width:64px;height:64px;">`+
							`<div class="media-body"><h5 class="content">`+data[index].name+`</h5><br /></div>`+`<h6 class="content-desc">`+data[index].language+' | '+data[index].description+`</h6></li></div>`;
							$("#list").append(list);
						});
						 $('#search_name').keypress(function(event)
						 {
						 	var search=$('#search_name').val();
						 	console.log(search);
						 	var slist;
							if(event.which==13)
							{
								$('#on_load').hide();
								document.getElementById("search_list").innerHTML="";
								$.each(data, function(index,value)
								{
									if(search==data[index].language)
									{
										slist=`<div class="result"><li class="media" style="list-style:none; padding:5px;"><img src="img/head.jpg" class="d-flex mr-3"  style="float:left;width:64px;height:64px;">`+								
										`<div class="media-body"><h5 class="content">`+data[index].name+`</h5><br /></div>`+data[index].language+`</li></div>`;
										$("#search_list").append(slist);
									}
								});
							}
						});
						 $('#search_company').keypress(function(event)
						 {
						 	var search=$('#search_name').val();
						 	console.log(search);
						 	var slist;
							if(event.which==13)
							{
								$('#on_load').hide();
								document.getElementById("search_list").innerHTML="";
								$.each(data, function(index,value)
								{
									if(search==data[index].language)
									{
										slist=`<div class="result"><li class="media" style="list-style:none; padding:5px;"><img src="img/head.jpg" class="d-flex mr-3"  style="float:left;width:64px;height:64px;">`+								
										`<div class="media-body"><h5 class="content">`+data[index].name+`</h5><br /></div>`+data[index].language+`</li></div>`;
										$("#search_list").append(slist);
									}
								});
							}
						});
						 $("[type=range]").change(function(){
	    					var newval=$(this).val();
	    					document.getElementById("search_list").innerHTML="";
	    					document.getElementById("value").innerHTML=newval;
	    					$.each(data, function(index,value)
							{
								if(data[index].stargazers_count<=newval)
								{
									slist=`<div class="result"><li class="media" style="list-style:none; padding:5px;"><img src="img/head.jpg" class="d-flex mr-3"  style="float:left;width:64px;height:64px;">`+								
									`<div class="media-body"><h5 class="content">`+data[index].name+`</h5><br /></div>`+data[index].language+`</li></div>`;
									$("#search_list").append(slist);
								}
							});
	  					});
					}
				});
			}
		}
	});
});