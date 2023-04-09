export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={props.fill ? props.fill : "#d97706"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 104.5"
      {...props}
    >
      <path d="m201,81.5c1.17,2.39,2.27,4.65,3.38,6.93-.98.58-1.55.14-1.98-.37-1.38-1.65-2.77-3.29-4.03-5.04-.58-.8-1.12-1.02-2.08-.89-5.96.82-11.93,1.61-17.9,2.33-5.5.66-11.02,1.25-16.53,1.82-5.28.54-10.57,1.03-15.85,1.52-2.94.28-5.88.54-8.83.76-.86.07-1.31.42-1.42,1.28-.05.39-.14.81-.34,1.14-.22.37-.6.64-.91.95-.29-.38-.68-.72-.84-1.14-.19-.51-.17-1.09-.26-1.8-1.34.09-2.64.16-3.93.28-6.56.6-13.11,1.22-19.67,1.84-6.16.58-12.32,1.13-18.47,1.75-5.68.57-11.35,1.21-17.02,1.82-5.43.59-10.87,1.17-16.3,1.76-5.63.61-11.26,1.28-16.9,1.81-10.34.97-20.68,2-31.09,1.48-2.05-.1-4.1-.55-6.12-.99-.56-.12-1.34-.73-1.41-1.2-.07-.48.49-1.31.99-1.57,3.05-1.55,6.1-3.14,9.28-4.43,14.2-5.76,28.5-11.26,42.63-17.16,9.72-4.05,19.26-8.55,28.84-12.93,13.15-6.02,26.08-12.48,38.73-19.48,9.75-5.4,19.36-11.04,28.14-17.95,4.28-3.37,8.25-7.07,11.32-11.62,1.41-2.09,2.66-4.28,2.74-6.9.05-1.61-.37-1.93-1.92-1.81-.49.04-1-.1-1.64-.17,1.49-1.18,4.56-1.29,5.88-.31,1.22.91,1.14,2.22.89,3.49-.57,2.88-2.06,5.34-3.82,7.63-3.85,5.02-8.61,9.08-13.67,12.81-8.82,6.51-18.29,11.99-27.89,17.25-20.53,11.26-41.68,21.27-63.17,30.53-13.3,5.73-26.81,10.96-40.22,16.45-2.92,1.19-5.79,2.5-8.65,3.81-.76.34-1.46.82-2.13,1.32-.28.21-.6.7-.52.95.09.27.58.51.94.59.65.16,1.34.25,2.01.27,7.28.22,14.53-.18,21.77-.9,6.75-.66,13.5-1.29,20.25-2.01,7.62-.81,15.22-1.73,22.83-2.54,6.59-.7,13.18-1.34,19.77-1.99,7.23-.71,14.46-1.41,21.69-2.09,4.85-.45,9.7-.86,14.55-1.25,1.05-.08,1.74-.31,2.02-1.52.26-1.15.87-2.21,1.35-3.38-2.28-.53-4.56-.99-6.79-1.6-2.7-.74-5.29-1.78-7.58-3.46-3.4-2.49-4.66-6.05-3.55-10.12,1.28-4.72,4.1-8.52,7.24-12.12,5.61-6.42,12.25-11.65,19.25-16.45,16.01-10.95,33.59-18.2,52.55-22.17,6.67-1.4,13.4-2.49,20.23-2.68,5.06-.14,10.15-.28,15.2.03,10.51.65,20.68,2.81,29.96,8.08,4.85,2.75,9.06,6.24,12.14,10.98,5.47,8.44,4.55,17.76-2.48,25.03-3.55,3.67-7.82,6.3-12.36,8.52-8.06,3.94-16.57,6.68-25.31,8.55-9.75,2.09-19.59,3.77-29.39,5.61-1.13.21-2.27.38-3.61.61Zm-2.27-4.75c.34.8.71,1.54.99,2.32.26.74.71.93,1.47.8,7.51-1.36,15.05-2.57,22.54-4.06,10.76-2.14,21.33-4.95,31.29-9.69,4.75-2.27,9.18-5.01,12.82-8.89,3.37-3.59,5.4-7.77,5.47-12.75.05-3.67-1-7.07-2.87-10.22-3.07-5.15-7.55-8.82-12.72-11.7-9.54-5.3-19.95-7.17-30.7-7.5-3.94-.12-7.92.01-11.83.47-5.92.69-11.86,1.45-17.67,2.74-17.64,3.89-33.95,10.98-48.9,21.13-7.32,4.97-14.26,10.41-20.05,17.16-2.87,3.35-5.43,6.91-6.54,11.29-1.03,4.04.33,7.41,3.83,9.71,3.09,2.04,6.58,2.97,10.15,3.68.27.05.74-.23.93-.49,3.72-5.13,8.45-9.24,13.34-13.17,11.87-9.56,24.85-17.37,38.48-24.13,9.44-4.68,19.03-8.99,29.32-11.51,5.89-1.44,11.82-2.28,17.84-.85,3.46.82,6.38,2.31,7.4,6.12.63,2.38.19,4.66-.55,6.9-1.75,5.28-5.04,9.56-8.93,13.42-7.66,7.6-16.93,12.58-26.91,16.36-2.67,1.01-5.39,1.9-8.19,2.87Zm-4.06-.63c-.26-.7-.44-1.18-.62-1.67-1.91-5.02-3.4-10.16-4.01-15.52-.1-.86.24-1.21.98-1.29.51-.05,1.04-.03,1.55-.02.74,0,1.04.4,1.11,1.12.48,5.31,2.17,10.31,3.9,15.3.29.84.72.98,1.52.67,2.93-1.15,5.92-2.17,8.81-3.4,8.49-3.61,16.3-8.28,22.75-14.97,4.08-4.23,7.53-8.84,8.69-14.83.9-4.64-1.32-8.35-5.89-9.54-2.77-.72-5.54-.56-8.3-.11-5.84.96-11.43,2.81-16.89,5.03-19.14,7.78-37.11,17.67-53.49,30.3-5.19,4-10.21,8.21-14.23,13.45-.25.32-.47.66-.85,1.21,18.84,1.39,37-.65,54.98-5.76Zm-57.8,10.99c20.01-1.81,39.94-3.68,59.92-6.62-.35-.71-.68-1.25-.9-1.84-.32-.85-.77-.96-1.66-.73-3.38.86-6.77,1.74-10.21,2.34-5.09.89-10.21,1.63-15.33,2.26-3.36.41-6.75.66-10.13.74-5.14.12-10.29.15-15.43-.01-4.66-.15-4.81-.2-6.23,3.42-.03.07-.01.15-.04.45Z" />
      <path d="m130.46,97.53c-1.29.19-2.57.43-3.87.56-5.63.57-11.25,1.12-16.88,1.66-3.72.35-7.45.65-11.18,1.01-3.76.36-7.52.78-11.28,1.14-2.85.28-5.7.52-8.56.75-.48.04-.98-.1-1.47-.15,0-.11,0-.22,0-.32,1.88-.24,3.75-.48,5.63-.7,3.27-.38,6.55-.76,9.83-1.12,3.2-.36,6.41-.69,9.61-1.03,3.36-.36,6.72-.73,10.09-1.1,3.29-.36,6.57-.72,9.86-1.05,2.02-.2,4.04-.38,6.07-.47.71-.03,1.43.21,2.15.33,0,.17,0,.34,0,.51Z" />
      <path d="m142.29,95.92c-1.08,1.4-2.54,1.84-4.02,1.22-.27-.11-.55-.45-.6-.72-.03-.16.36-.51.61-.59,1.3-.4,2.61-.56,4.02.09Z" />
    </svg>
  );
}