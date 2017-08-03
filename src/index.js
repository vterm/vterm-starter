import Store               from 'vterm/store'
import { decorate }        from 'vterm/extend'
import {
	FOREGROUND, BACKGROUND } from 'vterm/variables'

import { observer }        from 'mobx-preact'
import { h, Component }    from 'preact'

// Plugins are always classes that
// are executed upon load.
export default class Plugin {

	// This is the method that will always
	// Be executed when the plugin gets loaded
	// From here we can trigger all the other events
	constructor() {

		console.log('Starter plugin loaded😲')

		// So in here we can render normal
		// Preact component via
		// the `@decorate` decorator
		@decorate('preApp')
		@observer
		class MyCustomElement extends Component {
			getStyles() {
				const { foreground, background } = Store.config

				const styles = {
					// Color taken from the config or
					// from the default value in `vterm/variables`
					color: foreground      || FOREGROUND,
      		background: background || BACKGROUND,

					// Fixed positioning
					position: 'absolute',
					left: 0, right: 0,
					bottom: 0, top: 0,

					zIndex: 1000,
					padding: 32,

					// Flexbox proprities
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}

				return styles
			}

			render() {
				const styles = this.getStyles()

				return(
					<div style={styles}>
						<h1>This is an example!</h1>
						<hr />
						<span>There's so much more that you can do!😎 </span>
					</div>
				)
			}
		}

		// END: constructor
	}
}
