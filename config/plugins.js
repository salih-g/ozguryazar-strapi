module.exports = ({ env }) => ({
  ckeditor: true,
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: {
          items: [
            "fullScreen",
            "paragraph",
            "heading1",
            "heading2",
            "|",
            "bold",
            "fontColor",
            "fontBackgroundColor",
            "fontFamily",
            "underline",
            "fontSize",
            "removeFormat",
            "|",
            "alignment",
            "outdent",
            "indent",
            "horizontalLine",
            "|",
            "heading",
            "undo",
            "redo",
          ],
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
        fontSize: {
          options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
          supportAllValues: false,
        },
        fontFamily: {
          options: [
            "default",
            "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
            "Courier New, Courier, monospace",
            "Georgia, serif",
            "Lucida Sans Unicode, Lucida Grande, sans-serif",
            "Tahoma, Geneva, sans-serif",
            "Times New Roman, Times, serif",
            "Trebuchet MS, Helvetica, sans-serif",
            "Verdana, Geneva, sans-serif",
            "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
          ],
          supportAllValues: true,
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableCellProperties",
            "tableProperties",
            "toggleTableCaption",
          ],
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
          ],
        },
      },
    },
  },
});
