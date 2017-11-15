/****************************************************************************

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

-- A iPhone Scroll in AS3
-- Copyright 2009 Terence Tsang
-- admin@shinedraw.com
-- http://www.shinedraw.com
-- Your Flash vs Silverlight Repository

****************************************************************************/

package  
{
	import com.shinedraw.controls.IPhoneScroll;	
	import flash.events.Event;		
	import flash.display.MovieClip;
	
	public class Document extends MovieClip{
		private var _iPhoneScroll : IPhoneScroll;

		public function Document(){
			this.addEventListener(Event.ADDED_TO_STAGE, on_added_to_stage);
		}
		
		private function on_added_to_stage(e : Event):void{
			// place the object to the IPhoneScroll
			_iPhoneScroll = new IPhoneScroll();
			addChild(_iPhoneScroll);
		}
	}
}
