import { mount } from '@vue/test-utils'
import Tentangkami from '../views/Tentangkami.vue'
import { describe, it, expect } from 'vitest'

describe('Tentangkami.vue', () => {
  it('harus bisa dirender tanpa error', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.exists()).toBe(true)
  })

  it('menampilkan judul halaman utama', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.text()).toContain('Tentang Toko Pancing Ku')
  })

  it('menampilkan bagian sejarah', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.text()).toContain('Sejarah Kami')
    expect(wrapper.find('img[alt="Toko Pancing Ku di tahun 2010"]').exists()).toBe(true)
  })

  it('menampilkan bagian visi dan misi', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.text()).toContain('Visi & Misi')
    expect(wrapper.text()).toContain('Menjadi toko peralatan pancing terdepan')
    expect(wrapper.findAll('li').length).toBeGreaterThan(0) // misi
  })

  it('menampilkan anggota tim', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.text()).toContain('Tim Kami')
    expect(wrapper.text()).toContain('Laras')
    expect(wrapper.text()).toContain('Jaki Santoso')
    expect(wrapper.text()).toContain('Agus Suseno')
    expect(wrapper.findAll('.team-member').length).toBe(3)
  })

  it('menampilkan bagian footer dengan informasi kontak', () => {
    const wrapper = mount(Tentangkami)
    expect(wrapper.text()).toContain('Kontak Kami')
    expect(wrapper.text()).toContain('Jl. Karya Bersama No. 18')
    expect(wrapper.text()).toContain('(021) 773-521')
  })
})
