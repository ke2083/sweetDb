define(function(){

	return {

		orderBy: function(collection, property, comparison){
			
				var merge = function(left, right, p, c){

					 var result = [];
					
					 while(left.length !== 0 || right.length !== 0){
						if (left.length !== 0 && right.length !== 0){
							   // compare the first elements of the two sublists.
								if (c(left[0][p], right[0][p])){
									result.push(left[0]);
									left.splice(0, 1);
								}
								else{
									result.push(right[0]);
									right.splice(0,1);
								}
							}
							else if(left.length !== 0){
								result.push(left[0]);
								left.splice(0,1);
							}
							else if (right.length !== 0){
								result.push(right[0]);
								right.splice(0,1);
							}
						}
						return result;
				};

				var merge_sort = function(l, pr, co){
					// http://en.wikipedia.org/wiki/Merge_sort
					if (l.length <= 1) return l;

					var left = [];
					var right = [];
					var middle = Math.floor(l.length / 2);
					for(var x = 0; x < middle; x++){
						 left.push(l[x]);
					}

					for(var y = middle; y < l.length; y++){
						 right.push(l[y]);
					}

					left = merge_sort(left, pr, co);
					right = merge_sort(right, pr, co);
					return merge(left, right, pr, co);
				};

				var arr = [];
				for(var key in collection){
					if (collection.hasOwnProperty(key) && key != 'length' && key != 'orderBy'){
						arr.push(collection[key]);
					}
				}

				var finishedRes = merge_sort(arr, property, comparison);
				finishedRes.orderBy = function(prop, comp){
					return merge_sort(finishedRes, prop, comp);
				};

				return finishedRes;

		}

	};

});