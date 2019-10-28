/**
 * External dependencies
 */
import {
	appendImportant,
	marginLeftAlign,
	marginRightAlign,
} from '~stackable/util'
import deepmerge from 'deepmerge'

/**
 * WordPress dependencies
 */
import { sprintf } from '@wordpress/i18n'

export const createStyles = props => {
	const getValue = ( attrName, format = '', defaultValue = undefined ) => {
		const value = typeof props.attributes[ attrName ] === 'undefined' ? '' : props.attributes[ attrName ]
		return value !== '' ? ( format ? sprintf( format, value ) : value ) : defaultValue
	}

	const styles = []

	const {
		design = 'basic',
		contentAlign = '',
	} = props.attributes

	styles.push( {
		'.ugb-block-content': {
			marginTop: appendImportant( getValue( 'hrMarginTop', '%spx' ) ),
			marginBottom: appendImportant( getValue( 'hrMarginBottom', '%spx' ) ),
		},
	} )

	if ( design === 'basic' || design === 'bar' ) {
		styles.push( {
			'hr.ugb-divider__hr': {
				backgroundColor: appendImportant( getValue( 'color' ) ),
				height: appendImportant( getValue( 'height', '%spx' ) ),
				width: appendImportant( getValue( 'width', '%s%%' ) ),

				marginLeft: appendImportant( marginLeftAlign( contentAlign ) ),
				marginRight: appendImportant( marginRightAlign( contentAlign ) ),

				borderRadius: design === 'bar' ? appendImportant( getValue( 'height', 'calc(%spx / 2)' ) ) : undefined,
			},
		} )
	}

	if ( design === 'dots' || design === 'asterisks' ) {
		styles.push( {
			'.ugb-divider__dots': {
				width: appendImportant( getValue( 'width', '%s%%' ) ),
				marginLeft: appendImportant( marginLeftAlign( contentAlign ) ),
				marginRight: appendImportant( marginRightAlign( contentAlign ) ),
			},
			'.ugb-divider__dot': {
				backgroundColor: design === 'dots' ? appendImportant( getValue( 'color' ) ) : undefined,
				height: appendImportant( getValue( 'height', '%spx' ) ),
				width: appendImportant( getValue( 'height', '%spx' ) ),
			},
		} )
	}

	if ( design === 'asterisks' ) {
		styles.push( {
			'.ugb-divider__dot:before': {
				color: getValue( 'color' ),
				fontSize: getValue( 'height', 'calc(%spx * 1.8)' ),
			},
		} )
	}

	return deepmerge.all( styles )
}

export default createStyles
