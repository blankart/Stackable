/**
 * External dependencies
 */
import {
	addBorderAttributes,
} from '~stackable/block-components'
import { omit } from 'lodash'

const buttonAttributes = {
	buttonPadding: {
		stkResponsive: true,
		type: 'object',
		stkUnits: 'px',
	},
	buttonBackgroundColorType: {
		type: 'string',
		default: '',
	},
	buttonBackgroundColor: {
		stkHover: true,
		type: 'string',
		default: '', // button primary color.
	},
	buttonBackgroundColor2: {
		stkHover: true,
		type: 'string',
		default: '',
	},
	buttonBackgroundGradientDirection: {
		stkHover: true,
		type: 'number',
		default: '',
	},
	buttonTextColorType: {
		type: 'string',
		default: '',
	},
	buttonTextColor1: {
		type: 'string',
		stkHover: true,
		default: '',
	},
	buttonTextColor2: {
		type: 'string',
		default: '',
	},
	buttonTextGradientDirection: {
		type: 'number',
		default: '',
	},
}

export const addAttributes = ( attrObject, options = {} ) => {
	const {
		hasTextColor = true,
		hasTextGradient = true,
	} = options
	const attributesToExclude = []

	if ( ! hasTextColor ) {
		attributesToExclude.push(
			'buttonTextColorType',
			'buttonTextColor1',
			'buttonTextColor2',
			'buttonTextGradientDirection',
		)
	}

	if ( ! hasTextGradient ) {
		attributesToExclude.push(
			'buttonTextColorType',
			'buttonTextColor2',
			'buttonTextGradientDirection',
		)
	}

	attrObject.add( {
		attributes: attributesToExclude.length
			? omit( buttonAttributes, attributesToExclude )
			: buttonAttributes,
		versionAdded: '3.0.0',
		versionDeprecated: '',
	} )

	addBorderAttributes( attrObject, 'button%s' )
}
