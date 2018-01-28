import $ from 'jquery';

export default class List{
	addListItem(item, listItems) {
		listItems.push(item);		
		this.renderArray(listItems);
	};

	removeListItem(index, listItems){
		listItems.splice(index, 1);
		this.renderArray(listItems);
	}

	shiftUpItem(index, listItems) {
		if (!index) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index-1, 0, temp[0]);
			this.renderArray(listItems);
		}
	}

	shiftDownItem(index, listItems) {
		if (index >= listItems.length-1) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index+1, 0, temp[0]);
			this.renderArray(listItems);
		}
	}

	completedItem(index, listItems) {
		listItems[index].completed = !listItems[index].completed;
		console.log(listItems[index].completed)
		this.renderArray(listItems);
	}

	renderArray(listItems) {
		var that = this;
		console.log(that);
		$('tbody').remove();
		$('table').append('<tbody></tbody>');
		listItems.map(function(listItem, index){
			return(
				`<tr id="row${index}">
					<td>${index}</td>
					<td class=${listItem.completed ? 'completed': ''}>${listItem.itemValue}</td>
					<td>
						<button class="btn btn-success" id="btnComplete${index}">Completed</button>
						<button class="btn" id="btnUp${index}">
							Shift
							<span class="glyphicon glyphicon-menu-up"></span>
						</button>
						<button class="btn" id="btnDown${index}">
							Shift
							<span class="glyphicon glyphicon-menu-down"></span>
						</button>
						<button class="btn btn-danger" id="btnDel${index}">Delete</button>
					</td>
				</tr>`
			)
		}).forEach(function(item, index){
				$('tbody').append(item);
				
				$(`#btnDel${index}`).on('click', function(e){
					console.log(`Delete ${index}`);
					that.removeListItem(index, listItems);
				});
				
				$(`#btnUp${index}`).on('click', function(e){
					that.shiftUpItem(index, listItems);
				});

				$(`#btnDown${index}`).on('click', function(e){
					that.shiftDownItem(index, listItems);
				});

				$(`#btnComplete${index}`).on('click', function(e){
					that.completedItem(index, listItems);
				});

			});
	};	
}