import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx', // Entry point of your TypeScript code
  output: {
    file: 'dist/index.js', // Output file
    format: 'cjs', // CommonJS module format
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json', // Path to your tsconfig.json file
    }),
  ],
  external: ['react', 'react-dom'], // List of external dependencies
};
