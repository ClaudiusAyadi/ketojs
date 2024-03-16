import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import { defineConfig } from 'rollup';

export default defineConfig({
	input: 'packages/keto/src/index.js',
	output: [{ file: 'dist/keto.js', format: 'esm', name: 'keto' }],
	plugins: [cleanup(), filesize()]
});
