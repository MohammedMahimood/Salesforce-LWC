/**
 * @description       : 
 * @author            : Mohammed Mahimood
 * @group             : 
 * @last modified on  : 07-23-2026
 * @last modified by  : Mohammed Mahimood
**/
import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'
import SVG_IMAGE from '@salesforce/resourceUrl/svg_sunset';
export default class StaticImages extends LightningElement {
    userImage=USER_IMAGE;
    svgImg=SVG_IMAGE;
}