/**
 * Map of Aria Role strings with descriptions of the type of elements
 * that they should be used for. Descriptions provided by https://www.w3.org/TR/html-aria/.
 */
export const Roles = {
	/**
	 * A structure containing one or more focusable elements requiring user input, 
	 * such as keyboard or gesture events, that do not follow a standard interaction pattern 
	 * supported by a widget role.
	 */
	Application: "application",
	/**
	 * A section of a page that consists of a composition that forms an independent part of a document, page, or site.
	 */
	Article: "article",
	/**
	 * A region that contains mostly site-oriented content, rather than page-specific content.
	 */
	Banner: "banner",

	/**
	 * An input that allows for user-triggered actions when clicked or pressed.
	 */
	Button: "button",
	/**
	 * A checkable input that has three possible values: true, false, or mixed.
	 */
	Checkbox: "checkbox",
	/**
	 * A presentation of a select; usually similar to a textbox where users can type 
	 * ahead to select an option, or type to enter arbitrary text as a new item in the list.
	 */
	Combobox: "combobox",
	/**
	 * A supporting section of the document, designed to be complementary to the main
	 * content at a similar level in the DOM hierarchy, but remains meaningful when
	 * separated from the main content.
	 */
	Complementary: "complementary",
	/**
	 * A large perceivable region that contains information about the parent document.
	 */
	Contentinfo: "contactinfo",
	/**
	* A definition of a term or concept.
	*/
	Definition: "definition",
	/**
	 * A dialog is an application window that is designed to interrupt the current processing
	 * of an application in order to prompt the user to enter information or require a response.
	 */
	Dialog: "dialog",
	/**
	 * A list of references to members of a group, such as a static table of contents.
	 */
	Directory: "directory",
	/**
	 * A region containing related information that is 
	 * declared as document content, as opposed to a web application.
	 */
	Document: "document",
	/**
	 * A landmark region that contains a collection of items and objects that, as a whole,
	 * combine to create a form.
	 */
	Form: "form",
	/**
	 * A grid is an interactive control which contains cells of tabular data arranged in rows and columns.
	 */
	Grid: "grid",
	/**
	 * A cell in a grid or treegrid.
	 */
	Gridcell: "gridcell",
	/**
	 * A set of user interface objects which are not intended to be included in a
	 * page summary or table of contents by assistive technologies.
	 */
	Group: "group",
	/**
	 * A heading for a section of the page.
	 */
	Heading: "heading",
	/**
	 * A container for a collection of elements that form an image.
	 */
	Img: "img",
	/**
	 * An interactive reference to an internal or external resource that, when activated,
	 * causes the user agent to navigate to that resource.
	 */
	Link: "link",
	/**
	 * A group of non-interactive list items.
	 */
	List: "list",
	/**
	 * 	A widget that allows the user to select one or more items from a list of choices.
	 */
	Listbox: "listbox",
	/**
	 * A single item in a list or directory.
	 */
	Listitem: "listitem",
	/**
	 * A type of live region where new information is added in meaningful order and old information may disappear.
	 */
	Log: "log",
	/**
	 * The main content of a document.
	 */
	Main: "main",
	/**
	 * A type of live region where non-essential information changes frequently.
	 */
	Marquee: "marquee",
	/**
	 * Content that represents a mathematical expression.
	 */
	Math: "math",
	/**
	 * A type of widget that offers a list of choices to the user.
	 */
	Menu: "menu",
	/**
	 * A presentation of menu that usually remains visible and is usually presented horizontally.
	 */
	MenuBar: "menubar",
	/**
	 * An option in a group of choices contained by a menu or menubar.
	 */
	Menuitem: "menuitem",
	/**
	 * A checkable menuitem that has three possible values: true, false, or mixed.
	 */
	Menuitemcheckbox: "menuitemcheckbox",
	/**
	 * A checkable menuitem in a group of menuitemradio roles, only one of which can be checked at a time.
	 */
	Menuitemradio: "menuitemradio",
	/**
	 * A collection of navigational elements (usually links) for navigating the document or related documents.
	 */
	Navigation: "navigation",
	/**
	 * A section whose content is parenthetic or ancillary to the main content of the resource.
	 */
	Note: "note",
	/**
	 * A selectable item in a select list.
	 */
	Option: "option",
	/**
	 * An element whose implicit native role semantics will not be mapped to the accessibility API.
	 */
	Presentation: "presentation",
	/**
	 * An element that displays the progress status for tasks that take a long time.
	 */
	Progressbar: "progressbar",
	/**
	 * A checkable input in a group of radio roles, only one of which can be checked at a time.
	 */
	Radio: "radio",
	/**
	 * A group of radio buttons.
	 */
	RadioGroup: "radiogroup",
	/**
	 * A large perceivable section of a web page or document, that the 
	 * author feels is important enough to be included in a page summary or table of contents.
	 */
	Region: "region",
	/**
	 * A graphical object that controls the scrolling of content within a viewing area, 
	 * regardless of whether the content is fully displayed within the viewing area.
	 */
	Scrollbar: "scrollbar",
	/**
	 * A landmark region that contains a collection of items and objects that, 
	 * as a whole, combine to create a search facility.
	 */
	Search: "search",
	/**
	 * A divider that separates and distinguishes sections of content or groups of menuitems.
	 */
	Separator: "separator",
	/**
	 * A user input where the user selects a value from within a given range.
	 */
	Slider: "slider",
	/**
	 * A form of range that expects the user to select from among discrete choices.
	 */
	Spinbutton: "spinbutton",
	/**
	 * A container whose content is advisory information for the user but is not important enough to justify an alert,
	 * often but not necessarily presented as a status bar.
	 */
	Status: "status",
	/**
	 * A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
	 */
	Tab: "tab",
	/**
	 * A list of tab elements, which are references to tabpanel elements.
	 */
	Tablist: "tablist",
	/**
	 * A container for the resources associated with a tab, where each tab is contained in a tablist.
	 */
	Tabpanel: "tabpanel",
	/**
	 * Input that allows free-form text as its value.
	 */
	Textbox: "textbox",
	/**
	 * A type of live region containing a numerical counter which indicates an amount of elapsed time 
	 * from a start point, or the time remaining until an end point.
	 */
	Timer: "timer",
	/**
	 * A collection of commonly used function buttons represented in compact visual form.
	 */
	Toolbar: "toolbar",
	/**
	 * A contextual popup that displays a description for an element.
	 */
	Tooltip: "tooltip",
	/**
	 * A type of list that may contain sub-level nested groups that can be collapsed and expanded.
	 */
	Tree: "tree",
	/**
	 * A grid whose rows can be expanded and collapsed in the same manner as for a tree.
	 */
	TreeGrid: "treegrid",
	/**
	 * An option item of a tree. This is an element within a tree that may be expanded or 
	 * collapsed if it contains a sub-level group of treeitems.
	 */
	Treeitem: "treeitem",
	/**
	 * A type of checkbox that represents on/off values, as opposed to checked/unchecked values.
	 */
	Switch: "switch",
};